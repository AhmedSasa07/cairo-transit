import https from 'https';
import fs from 'fs';

const url = 'https://files2.mobilitycairo.com/s3fs-public/documents/V2024.05.09_Lot05_Line%20Map_Static%20-%203C.pdf';

https.get(url, (res) => {
  console.log('Status:', res.statusCode);
  console.log('Headers:', res.headers['content-length'], res.headers['content-type']);
  if (res.statusCode === 200) {
    const file = fs.createWriteStream('public/maps/Line3_Static_Map_V2024.05.09.pdf');
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Downloaded Line3_Static_Map_V2024.05.09.pdf. Size:', fs.statSync('public/maps/Line3_Static_Map_V2024.05.09.pdf').size);
    });
  }
}).on('error', (err) => {
  console.error('Error:', err.message);
});
