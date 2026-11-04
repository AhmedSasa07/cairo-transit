import json
import sys

if sys.stdout.encoding != 'utf-8':
    sys.stdout.reconfigure(encoding='utf-8')

with open('all_ticket_details.json', 'r', encoding='utf-8') as f:
    tickets = json.load(f)

print(f"Total ticket detail items: {len(tickets)}")

for t in tickets:
    print(f"\n==========================================")
    print(f"TITLE: {t['title']}")
    print(f"URL: {t['url']}")
    print(f"IMAGES: {len(t['images'])}")
    for img in t['images']:
        print(f"  img: src={img['src']} | alt={img['alt']}")
    if t['tables']:
        print(f"TABLES ({len(t['tables'])}):")
        for tbl in t['tables']:
            for row in tbl:
                print("  ", row)
    else:
        print("TABLES: None")
    print(f"TEXT SNIPPET: {t['text'][:350]}")
