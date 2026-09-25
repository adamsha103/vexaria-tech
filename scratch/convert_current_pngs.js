const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function convertPngsToWebp() {
  const imgDir = path.join(__dirname, '../public/images');

  const pngFiles = [
    { name: 'furniture.png', target: 'furniture.webp' },
    { name: '12b.png', target: '12b.webp' }
  ];

  for (const item of pngFiles) {
    const pngPath = path.join(imgDir, item.name);
    const webpPath = path.join(imgDir, item.target);

    if (fs.existsSync(pngPath)) {
      const inputStats = fs.statSync(pngPath);
      console.log(`Converting ${item.name} (${(inputStats.size / 1024 / 1024).toFixed(2)} MB)...`);
      
      await sharp(pngPath)
        .webp({ quality: 90 })
        .toFile(webpPath);
        
      const outputStats = fs.statSync(webpPath);
      console.log(`Successfully generated ${item.target} (${(outputStats.size / 1024).toFixed(2)} KB). Saved ${((1 - outputStats.size / inputStats.size) * 100).toFixed(1)}% space.`);

      // Delete the original png file
      fs.unlinkSync(pngPath);
      console.log(`Removed original file: ${item.name}`);
    } else {
      console.log(`File not found: ${pngPath}`);
    }
  }
}

convertPngsToWebp().catch(console.error);
