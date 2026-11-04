async function main() {
  try {
    const res = await fetch('https://www.mobilitycairo.com/en/travel-information/maps');
    const html = await res.text();
    const pdfMatches = [...html.matchAll(/href=["']([^"']+\.pdf[^"']*)["']/gi)];
    console.log('PDF links found:', pdfMatches.map(m => m[1]));

    const imgMatches = [...html.matchAll(/(src|href)=["']([^"']+\.(png|jpg|jpeg)[^"']*)["']/gi)];
    console.log('Img links found count:', imgMatches.length);
    console.log('Img links sample:', imgMatches.slice(0, 10).map(m => m[2]));
  } catch (e) {
    console.error('Error fetching mobility cairo maps:', e);
  }
}
main();
