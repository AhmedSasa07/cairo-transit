import https from 'https';
import fs from 'fs';

const url = 'https://files2.mobilitycairo.com/s3fs-public/documents/Cairo%20Network%20Map%20-%20V2024.05.09.pdf';

https.get(url, (res) => {
  console.log('Status:', res.statusCode);
  console.log('Headers:', res.headers['content-length'], res.headers['content-type']);
  if (res.statusCode === 200) {
    const file = fs.createWriteStream('public/maps/Cairo_Network_Map_V2024.05.09.pdf');
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Downloaded Cairo_Network_Map_V2024.05.09.pdf. Size:', fs.statSync('public/maps/Cairo_Network_Map_V2024.05.09.pdf').size);
    });
  }
}).on('error', (err) => {
  console.error('Error:', err.message);
});
