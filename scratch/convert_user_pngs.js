const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function convertUserPngsToWebp() {
  const imgDir = path.join(__dirname, '../public/images');

  const textilesPng = path.join(imgDir, 'ChatGPT Image Sep 24, 2026, 04_36_34 PM.png');
  const electronicsPng = path.join(imgDir, 'ChatGPT Image Sep 24, 2026, 04_38_26 PM.png');

  const textilesWebp = path.join(imgDir, 'industry-textiles.webp');
  const electronicsWebp = path.join(imgDir, 'industry-electronics.webp');

  if (fs.existsSync(textilesPng)) {
    await sharp(textilesPng)
      .webp({ quality: 90 })
      .toFile(textilesWebp);
    console.log('Converted textiles PNG to industry-textiles.webp');
    fs.unlinkSync(textilesPng);
    console.log('Deleted original textiles PNG');
  }

  if (fs.existsSync(electronicsPng)) {
    await sharp(electronicsPng)
      .webp({ quality: 90 })
      .toFile(electronicsWebp);
    console.log('Converted electronics PNG to industry-electronics.webp');
    fs.unlinkSync(electronicsPng);
    console.log('Deleted original electronics PNG');
  }
}

convertUserPngsToWebp().catch(console.error);
