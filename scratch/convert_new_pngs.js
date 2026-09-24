const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function convertNewPngs() {
  const imgDir = path.join(__dirname, '../public/images');

  const pngEcommerce = path.join(imgDir, 'ChatGPT Image Sep 24, 2026, 05_24_30 PM.png');
  const pngTextiles = path.join(imgDir, 'ChatGPT Image Sep 24, 2026, 05_24_39 PM.png');

  const webpEcommerce = path.join(imgDir, 'industry-ecommerce.webp');
  const webpTextiles = path.join(imgDir, 'industry-textiles.webp');

  if (fs.existsSync(pngEcommerce)) {
    await sharp(pngEcommerce)
      .webp({ quality: 90 })
      .toFile(webpEcommerce);
    console.log('Converted ecommerce PNG -> industry-ecommerce.webp');
    fs.unlinkSync(pngEcommerce);
    console.log('Deleted original ecommerce PNG');
  }

  if (fs.existsSync(pngTextiles)) {
    await sharp(pngTextiles)
      .webp({ quality: 90 })
      .toFile(webpTextiles);
    console.log('Converted textiles PNG -> industry-textiles.webp');
    fs.unlinkSync(pngTextiles);
    console.log('Deleted original textiles PNG');
  }
}

convertNewPngs().catch(console.error);
