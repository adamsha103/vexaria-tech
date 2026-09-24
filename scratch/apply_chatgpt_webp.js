const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, '../public/images');

// Copy chatgpt-new-1.webp to industry-textiles.webp if present, or chatgpt-1.webp
if (fs.existsSync(path.join(imgDir, 'chatgpt-new-1.webp'))) {
  fs.copyFileSync(path.join(imgDir, 'chatgpt-new-1.webp'), path.join(imgDir, 'industry-textiles.webp'));
  console.log('Copied chatgpt-new-1.webp -> industry-textiles.webp');
} else if (fs.existsSync(path.join(imgDir, 'chatgpt-1.webp'))) {
  fs.copyFileSync(path.join(imgDir, 'chatgpt-1.webp'), path.join(imgDir, 'industry-textiles.webp'));
  console.log('Copied chatgpt-1.webp -> industry-textiles.webp');
}

// Copy chatgpt-new-2.webp to industry-electronics.webp if present, or chatgpt-2.webp
if (fs.existsSync(path.join(imgDir, 'chatgpt-new-2.webp'))) {
  fs.copyFileSync(path.join(imgDir, 'chatgpt-new-2.webp'), path.join(imgDir, 'industry-electronics.webp'));
  console.log('Copied chatgpt-new-2.webp -> industry-electronics.webp');
} else if (fs.existsSync(path.join(imgDir, 'chatgpt-2.webp'))) {
  fs.copyFileSync(path.join(imgDir, 'chatgpt-2.webp'), path.join(imgDir, 'industry-electronics.webp'));
  console.log('Copied chatgpt-2.webp -> industry-electronics.webp');
}
