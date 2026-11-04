import re
import json

with open('choose_your_ticket.html', 'r', encoding='utf-8') as f:
    html = f.read()

links = re.findall(r'href=["\'](/en/tickets/choose-your-ticket/[^"\']+)["\']', html)
unique_links = sorted(list(set(links)))
with open('unique_ticket_urls.json', 'w', encoding='utf-8') as f:
    json.dump(unique_links, f, indent=2)

print('Count:', len(unique_links))
for u in unique_links:
    print(u)
