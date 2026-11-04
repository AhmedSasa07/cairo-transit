import re
import json

with open('choose_your_ticket.html', 'r', encoding='utf-8') as f:
    html = f.read()

links = re.findall(r'<a\s+[^>]*href=["\']([^"\']+)["\'][^>]*>(.*?)</a>', html, re.I | re.S)

ticket_links = []
for href, text in links:
    clean_text = ' '.join(re.sub(r'<[^>]+>', '', text).split())
    if '/en/tickets/' in href or 'ticket' in href.lower() or 'pass' in href.lower():
        ticket_links.append({'href': href, 'text': clean_text})

print(f"Total ticket links found: {len(ticket_links)}")
for l in ticket_links:
    print(f"{l['text']} -> {l['href']}")

with open('ticket_links.json', 'w', encoding='utf-8') as f:
    json.dump(ticket_links, f, indent=2)
