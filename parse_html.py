import sys
import re
import os
import json

if sys.stdout.encoding != 'utf-8':
    sys.stdout.reconfigure(encoding='utf-8')

def parse_html_details(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        html = f.read()

    # Extract all headings and their following content/cards
    # In Drupal / Mobility Cairo, tickets are usually in card blocks or accordion / grid items
    cards = []
    # Let's find patterns like <div ... class="...ticket..." or heading tags
    # Let's extract all h1, h2, h3, h4 and their surrounding elements
    elements = re.findall(r'(<h[1-4][^>]*>.*?</h[1-4]>[\s\S]*?(?=<h[1-4]|$))', html, re.I)
    
    extracted_sections = []
    for el in elements:
        h_match = re.search(r'<(h[1-4])[^>]*>(.*?)</\1>', el, re.I | re.S)
        if not h_match:
            continue
        level = h_match.group(1)
        title = re.sub(r'<[^>]+>', '', h_match.group(2)).strip()
        title = ' '.join(title.split())
        
        # Extract text within this section (excluding the heading itself)
        body = el[h_match.end():]
        
        # Check for images
        imgs = []
        for im in re.finditer(r'<img\s+([^>]+)>', body, re.I):
            src = re.search(r'src=["\']([^"\']+)["\']', im.group(1))
            alt = re.search(r'alt=["\']([^"\']*)["\']', im.group(1))
            imgs.append({
                'src': src.group(1) if src else '',
                'alt': alt.group(1) if alt else ''
            })
            
        # Check for prices or numbers (EGP or L.E or LE or EGP)
        clean_body = re.sub(r'<[^>]+>', ' ', body)
        clean_body = ' '.join(clean_body.split())
        
        extracted_sections.append({
            'level': level,
            'title': title,
            'text': clean_body[:500], # preview
            'full_text': clean_body,
            'images': imgs
        })

    # Also search for table data
    tables = []
    for tbl in re.finditer(r'<table[^>]*>(.*?)</table>', html, re.I | re.S):
        rows = re.findall(r'<tr[^>]*>(.*?)</tr>', tbl.group(1), re.I | re.S)
        tbl_data = []
        for r in rows:
            cells = re.findall(r'<t[dh][^>]*>(.*?)</t[dh]>', r, re.I | re.S)
            clean_cells = [' '.join(re.sub(r'<[^>]+>', '', c).split()) for c in cells]
            if clean_cells:
                tbl_data.append(clean_cells)
        if tbl_data:
            tables.append(tbl_data)

    return {
        'sections': extracted_sections,
        'tables': tables
    }

res1 = parse_html_details('choose_your_ticket.html')
res2 = parse_html_details('purchase_top.html')

with open('parsed_tickets.json', 'w', encoding='utf-8') as f:
    json.dump({'choose_your_ticket': res1, 'purchase_top': res2}, f, ensure_ascii=False, indent=2)

print(f"choose_your_ticket sections: {len(res1['sections'])}, tables: {len(res1['tables'])}")
print(f"purchase_top sections: {len(res2['sections'])}, tables: {len(res2['tables'])}")
