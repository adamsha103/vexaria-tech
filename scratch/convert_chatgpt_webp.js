const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function processChatGPTImages() {
  const imgDir = path.join(__dirname, '../public/images');
  
  const files = fs.readdirSync(imgDir).filter(f => f.startsWith('ChatGPT Image') && f.endsWith('.png'));
  console.log('Found PNG files:', files);

  for (let i = 0; i < files.length; i++) {
    const pngName = files[i];
    const fullPngPath = path.join(imgDir, pngName);
    const webpName = `chatgpt-new-${i + 1}.webp`;
    const fullWebpPath = path.join(imgDir, webpName);

    await sharp(fullPngPath)
      .webp({ quality: 90 })
      .toFile(fullWebpPath);
    
    console.log(`Converted ${pngName} -> ${webpName}`);
    fs.unlinkSync(fullPngPath);
    console.log(`Deleted ${pngName}`);
  }
}

processChatGPTImages().catch(console.error);
