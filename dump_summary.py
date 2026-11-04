import json
import sys

if sys.stdout.encoding != 'utf-8':
    sys.stdout.reconfigure(encoding='utf-8')

with open('parsed_tickets.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

with open('summary_choose_ticket.txt', 'w', encoding='utf-8') as out:
    out.write("=== CHOOSE YOUR TICKET SECTIONS ===\n\n")
    for idx, s in enumerate(data['choose_your_ticket']['sections']):
        out.write(f"[{idx+1}] {s['level'].upper()} - {s['title']}\n")
        out.write(f"Images: {s['images']}\n")
        out.write(f"Text: {s['full_text']}\n")
        out.write("-" * 60 + "\n")

    out.write("\n\n=== PURCHASE TOP SECTIONS ===\n\n")
    for idx, s in enumerate(data['purchase_top']['sections']):
        out.write(f"[{idx+1}] {s['level'].upper()} - {s['title']}\n")
        out.write(f"Images: {s['images']}\n")
        out.write(f"Text: {s['full_text']}\n")
        out.write("-" * 60 + "\n")

print("Wrote summary_choose_ticket.txt successfully.")
