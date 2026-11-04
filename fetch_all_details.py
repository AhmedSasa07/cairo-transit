import urllib.request
import ssl
import json
import os
import re

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

with open('unique_ticket_urls.json', 'r', encoding='utf-8') as f:
    urls = json.load(f)

os.makedirs('ticket_details_html', exist_ok=True)

details_data = []

for u in urls:
    full_url = 'https://www.mobilitycairo.com' + u
    slug = u.strip('/').replace('/', '_')
    html_file = f'ticket_details_html/{slug}.html'
    
    if not os.path.exists(html_file):
        try:
            req = urllib.request.Request(full_url, headers=headers)
            with urllib.request.urlopen(req, context=ctx, timeout=10) as resp:
                content = resp.read().decode('utf-8')
                with open(html_file, 'w', encoding='utf-8') as out_f:
                    out_f.write(content)
                print(f"Downloaded: {slug}")
        except Exception as e:
            print(f"Error {slug}: {e}")
            continue
    else:
        with open(html_file, 'r', encoding='utf-8') as in_f:
            content = in_f.read()

    # Extract images, tables, price, description
    title_m = re.search(r'<h1[^>]*>(.*?)</h1>', content, re.I | re.S)
    title = re.sub(r'<[^>]+>', '', title_m.group(1)).strip() if title_m else slug
    
    # Extract article/main text
    main_m = re.search(r'<article[^>]*>(.*?)</article>', content, re.I | re.S)
    main_html = main_m.group(1) if main_m else content
    
    # Extract all tables
    tables = []
    for tbl in re.finditer(r'<table[^>]*>(.*?)</table>', main_html, re.I | re.S):
        rows = []
        for r in re.finditer(r'<tr[^>]*>(.*?)</tr>', tbl.group(1), re.I | re.S):
            cells = re.findall(r'<t[dh][^>]*>(.*?)</t[dh]>', r.group(1), re.I | re.S)
            clean_cells = [' '.join(re.sub(r'<[^>]+>', ' ', c).split()) for c in cells]
            if clean_cells:
                rows.append(clean_cells)
        if rows:
            tables.append(rows)

    # Extract all images in article
    imgs = []
    for im in re.finditer(r'<img\s+([^>]+)>', main_html, re.I):
        src = re.search(r'src=["\']([^"\']+)["\']', im.group(1))
        alt = re.search(r'alt=["\']([^"\']*)["\']', im.group(1))
        if src:
            imgs.append({'src': src.group(1), 'alt': alt.group(1) if alt else ''})

    # Clean text
    clean_text = ' '.join(re.sub(r'<[^>]+>', ' ', main_html).split())

    details_data.append({
        'url': full_url,
        'slug': slug,
        'title': title,
        'tables': tables,
        'images': imgs,
        'text': clean_text[:2000] # first 2000 chars
    })

with open('all_ticket_details.json', 'w', encoding='utf-8') as f:
    json.dump(details_data, f, ensure_ascii=False, indent=2)

print(f"Done processing {len(details_data)} pages.")
