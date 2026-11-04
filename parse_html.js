const fs = require('fs');

function extractInfo(filename) {
  console.log(`\n================== ${filename} ==================`);
  const html = fs.readFileSync(filename, 'utf8');
  
  // Extract all PDF links
  const pdfRegex = /href=["']([^"']+\.pdf[^"']*)["']/gi;
  let m;
  console.log('\n--- PDF Links ---');
  while ((m = pdfRegex.exec(html)) !== null) {
    console.log(m[1]);
  }

  // Extract all images
  const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  console.log('\n--- Images ---');
  const images = [];
  while ((m = imgRegex.exec(html)) !== null) {
    images.push(m[0]);
  }
  console.log(`Total images: ${images.length}`);
  images.forEach(img => console.log(img));

  // Extract titles, headings, and main content sections
  console.log('\n--- Headings (h1, h2, h3, h4) ---');
  const hRegex = /<(h[1-6])[^>]*>(.*?)<\/\1>/gis;
  while ((m = hRegex.exec(html)) !== null) {
    const text = m[2].replace(/<[^>]+>/g, '').trim();
    if (text) console.log(`${m[1]}: ${text}`);
  }
}

extractInfo('choose_your_ticket.html');
extractInfo('purchase_top.html');
