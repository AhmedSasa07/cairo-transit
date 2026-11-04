import urllib.request
import ssl
import os

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

images = [
    {"name": "Ticket_Y_Yellow.png", "url": "https://edv-su-files.s3.eu-west-1.amazonaws.com/cairo/master/public/images/titres/Ticket%20Y.png"},
    {"name": "Ticket_G_Green.png", "url": "https://edv-su-files.s3.eu-west-1.amazonaws.com/cairo/master/public/images/titres/Ticket%20G.png"},
    {"name": "Ticket_P_Pink.png", "url": "https://edv-su-files.s3.eu-west-1.amazonaws.com/cairo/master/public/images/titres/Ticket%20P.png"},
    {"name": "Ticket_B_Blue.png", "url": "https://edv-su-files.s3.eu-west-1.amazonaws.com/cairo/master/public/images/titres/Ticket%20B.png"},
    {"name": "Ticket_M_Grey.png", "url": "https://edv-su-files.s3.eu-west-1.amazonaws.com/cairo/master/public/images/titres/Ticket%20M.png"},
    {"name": "Wallet_Card_Full.png", "url": "https://files.mobilitycairo.com/cairo/master/public/inline-images/identification%20copy.png"},
    {"name": "Wallet_Card_Thumb.png", "url": "https://files2.mobilitycairo.com/s3fs-public/styles/height_50px/public/images/identification%20copy.png?VersionId=KuxhrnrY6sqVVjwkGKgvehyL_YD8YUs_&itok=SYphtReS"},
    {"name": "Asset_1_Elderly.png", "url": "https://files2.mobilitycairo.com/s3fs-public/styles/height_50px/public/images/Asset%201.png?VersionId=6.jjjMLaWIiepTmOI3UPOPjvFDsawueY&itok=W_HkIgjq"},
    {"name": "Asset_2_Regular.png", "url": "https://files2.mobilitycairo.com/s3fs-public/styles/height_50px/public/images/Asset%202.png?VersionId=jbMf8XWiwqcCCu2QzuMNyNUV9V5hALJs&itok=ZM0_3WBa"},
    {"name": "Asset_3_SpecialNeeds.png", "url": "https://files2.mobilitycairo.com/s3fs-public/styles/height_50px/public/images/Asset%203.png?VersionId=NuaCKmIldDrodTHv.WJcLLbS6wRkDpk8&itok=prl5iDEk"},
    {"name": "Asset_4_Student.png", "url": "https://files2.mobilitycairo.com/s3fs-public/styles/height_50px/public/images/Asset%204.png?VersionId=nOPG0eMJ9fQQ5iS7jTNcMAFrsX_8GmeB&itok=iTiIRGA9"},
    {"name": "RDMC_Logo.jpg", "url": "https://files2.mobilitycairo.com/s3fs-public/default_images/RDMC%20LOGO.jpg?VersionId=ax7A2TMSWfO8Qg5hBUW8MUNTddTaQv9O"},
    {"name": "MobilityCairo_Logo.png", "url": "https://files2-explore-mobilitycairo-pprd.ratpdev.com/s3fs-public/inline-images/Logo-Mobility-Cairo.png?VersionId=MHULo26B7iuWQn6e4VWxivgsPswo7evI"}
]

os.makedirs('mobility_images', exist_ok=True)

total_bytes = 0
results = []
for item in images:
    filepath = os.path.join('mobility_images', item['name'])
    try:
        req = urllib.request.Request(item['url'], headers=headers)
        with urllib.request.urlopen(req, context=ctx, timeout=10) as resp:
            data = resp.read()
            with open(filepath, 'wb') as f:
                f.write(data)
            size = len(data)
            total_bytes += size
            results.append({
                'name': item['name'],
                'url': item['url'],
                'size_bytes': size,
                'size_kb': round(size / 1024, 2),
                'status': 'OK'
            })
            print(f"Downloaded {item['name']}: {size} bytes ({round(size/1024, 2)} KB)")
    except Exception as e:
        results.append({
            'name': item['name'],
            'url': item['url'],
            'error': str(e),
            'status': 'FAIL'
        })
        print(f"FAILED {item['name']}: {e}")

print(f"\nTotal downloaded images: {len([r for r in results if r['status']=='OK'])} / {len(images)}")
print(f"Total size: {total_bytes} bytes ({round(total_bytes/1024, 2)} KB, {round(total_bytes/(1024*1024), 2)} MB)")

import json
with open('mobility_images_summary.json', 'w', encoding='utf-8') as f:
    json.dump({'total_bytes': total_bytes, 'images': results}, f, indent=2)
