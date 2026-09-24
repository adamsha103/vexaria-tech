const sharp = require('sharp');
const fs = require('fs');

// 1. Textiles & Silk Sarees SVG
const textilesSvg = `<svg width='1200' height='800' viewBox='0 0 1200 800' xmlns='http://www.w3.org/2000/svg'>
  <defs>
    <linearGradient id='bgTextiles' x1='0%' y1='0%' x2='100%' y2='100%'>
      <stop offset='0%' stop-color='#1E1B4B' />
      <stop offset='50%' stop-color='#0F172A' />
      <stop offset='100%' stop-color='#090D16' />
    </linearGradient>
    <radialGradient id='goldGlow' cx='70%' cy='35%' r='45%'>
      <stop offset='0%' stop-color='#F59E0B' stop-opacity='0.25' />
      <stop offset='100%' stop-color='#F59E0B' stop-opacity='0' />
    </radialGradient>
    <linearGradient id='goldBtn' x1='0%' y1='0%' x2='100%' y2='0%'>
      <stop offset='0%' stop-color='#D97706' />
      <stop offset='100%' stop-color='#F59E0B' />
    </linearGradient>
    <linearGradient id='cardGrad' x1='0%' y1='0%' x2='0%' y2='100%'>
      <stop offset='0%' stop-color='#1E293B' stop-opacity='0.9' />
      <stop offset='100%' stop-color='#0F172A' stop-opacity='0.9' />
    </linearGradient>
  </defs>

  <rect width='1200' height='800' fill='url(#bgTextiles)' />
  <rect width='1200' height='800' fill='url(#goldGlow)' />

  <!-- Left Side: Hero Info & Branding -->
  <g transform='translate(80, 160)'>
    <rect width='250' height='36' rx='18' fill='#78350F' fill-opacity='0.8' stroke='#F59E0B' stroke-width='1.5' />
    <text x='20' y='23' font-family='sans-serif' font-size='13' font-weight='bold' fill='#FDE68A' letter-spacing='1'>
      👑 SILK SAREES &amp; GARMENT APP
    </text>

    <text x='0' y='100' font-family='sans-serif' font-size='44' font-weight='900' fill='#FFFFFF'>
      Kanchi Silks Showroom
    </text>
    <text x='0' y='145' font-family='sans-serif' font-size='22' font-weight='700' fill='#F59E0B'>
      காஞ்சி பட்டு புடவைகள் மற்றும் ஆடை கடை
    </text>

    <text x='0' y='195' font-family='sans-serif' font-size='16' fill='#94A3B8'>
      E-commerce app for silk saree showrooms &amp; garment boutiques in Tamil Nadu.
    </text>

    <!-- Feature Tags -->
    <g transform='translate(0, 240)'>
      <rect x='0' y='0' width='370' height='50' rx='12' fill='#0F172A' stroke='#334155' stroke-width='1' />
      <circle cx='30' cy='25' r='12' fill='#92400E' />
      <text x='26' y='30' font-family='sans-serif' font-size='14' fill='#FDE68A'>✓</text>
      <text x='54' y='22' font-family='sans-serif' font-size='14' font-weight='bold' fill='#F8FAFC'>Pure Silk Sarees: ₹8,999 - ₹24,500</text>
      <text x='54' y='38' font-family='sans-serif' font-size='12' fill='#94A3B8'>Kanchipuram, Soft Silk &amp; Designer Garments</text>

      <rect x='0' y='65' width='370' height='50' rx='12' fill='#0F172A' stroke='#334155' stroke-width='1' />
      <circle cx='30' cy='90' r='12' fill='#3730A3' />
      <text x='24' y='95' font-family='sans-serif' font-size='14' fill='#A5B4FC'>✨</text>
      <text x='54' y='87' font-family='sans-serif' font-size='14' font-weight='bold' fill='#F8FAFC'>Filter by Fabric, Color &amp; Occasion</text>
      <text x='54' y='103' font-family='sans-serif' font-size='12' fill='#94A3B8'>Bridal, Festival, Casual &amp; Party Wear</text>

      <rect x='0' y='130' width='370' height='50' rx='12' fill='#0F172A' stroke='#334155' stroke-width='1' />
      <circle cx='30' cy='155' r='12' fill='#065F46' />
      <text x='24' y='160' font-family='sans-serif' font-size='14' fill='#6EE7B7'>🚚</text>
      <text x='54' y='152' font-family='sans-serif' font-size='14' font-weight='bold' fill='#F8FAFC'>Pan-India &amp; Worldwide Shipping</text>
      <text x='54' y='168' font-family='sans-serif' font-size='12' fill='#94A3B8'>Direct store delivery with WhatsApp tracking</text>
    </g>
  </g>

  <!-- Right Side: Phone Mockup Frame -->
  <g transform='translate(680, 80)'>
    <rect width='420' height='640' rx='44' fill='#020617' stroke='#334155' stroke-width='4' />
    <rect x='10' y='10' width='400' height='620' rx='36' fill='#090F1D' />
    <rect x='150' y='20' width='100' height='18' rx='9' fill='#020617' />

    <!-- App Header -->
    <g transform='translate(30, 50)'>
      <text x='0' y='20' font-family='sans-serif' font-size='16' font-weight='bold' fill='#F59E0B'>KANCHI SILKS</text>
      <text x='0' y='36' font-family='sans-serif' font-size='11' fill='#94A3B8'>📍 Kanchipuram &amp; Chennai</text>
      <rect x='280' y='5' width='60' height='28' rx='14' fill='#78350F' />
      <text x='294' y='23' font-family='sans-serif' font-size='12' font-weight='bold' fill='#FDE68A'>🛍️ 3</text>
    </g>

    <!-- Search Bar -->
    <rect x='30' y='100' width='340' height='38' rx='12' fill='#1E293B' stroke='#334155' stroke-width='1' />
    <text x='46' y='124' font-family='sans-serif' font-size='13' fill='#64748B'>🔍 Search Kanchipuram silk sarees...</text>

    <!-- Category Pills -->
    <g transform='translate(30, 152)'>
      <rect x='0' y='0' width='90' height='28' rx='14' fill='url(#goldBtn)' />
      <text x='16' y='18' font-family='sans-serif' font-size='12' font-weight='bold' fill='#FFFFFF'>Silk Sarees</text>

      <rect x='98' y='0' width='70' height='28' rx='14' fill='#1E293B' />
      <text x='114' y='18' font-family='sans-serif' font-size='12' fill='#94A3B8'>Bridal</text>

      <rect x='176' y='0' width='75' height='28' rx='14' fill='#1E293B' />
      <text x='192' y='18' font-family='sans-serif' font-size='12' fill='#94A3B8'>Chanderi</text>

      <rect x='259' y='0' width='80' height='28' rx='14' fill='#1E293B' />
      <text x='275' y='18' font-family='sans-serif' font-size='12' fill='#94A3B8'>Garments</text>
    </g>

    <text x='30' y='210' font-family='sans-serif' font-size='14' font-weight='bold' fill='#F8FAFC'>Silk Sarees Collection (பட்டு சேலைகள்)</text>

    <!-- 4 Product Cards Grid -->
    <g transform='translate(30, 225)'>
      <rect width='160' height='160' rx='16' fill='url(#cardGrad)' stroke='#334155' stroke-width='1' />
      <circle cx='80' cy='55' r='30' fill='#D97706' fill-opacity='0.2' />
      <text x='80' y='63' font-family='sans-serif' font-size='28' text-anchor='middle'>🥻</text>
      <text x='14' y='110' font-family='sans-serif' font-size='13' font-weight='bold' fill='#F8FAFC'>Kanchipuram Silk</text>
      <text x='14' y='126' font-family='sans-serif' font-size='11' fill='#94A3B8'>Traditional Zari</text>
      <text x='14' y='146' font-family='sans-serif' font-size='14' font-weight='bold' fill='#F59E0B'>₹12,500</text>
      <rect x='106' y='130' width='44' height='22' rx='6' fill='url(#goldBtn)' />
      <text x='115' y='145' font-family='sans-serif' font-size='11' font-weight='bold' fill='#FFFFFF'>BUY</text>
    </g>

    <g transform='translate(210, 225)'>
      <rect width='160' height='160' rx='16' fill='url(#cardGrad)' stroke='#334155' stroke-width='1' />
      <circle cx='80' cy='55' r='30' fill='#E11D48' fill-opacity='0.2' />
      <text x='80' y='63' font-family='sans-serif' font-size='28' text-anchor='middle'>👗</text>
      <text x='14' y='110' font-family='sans-serif' font-size='13' font-weight='bold' fill='#F8FAFC'>Soft Silk Pattu</text>
      <text x='14' y='126' font-family='sans-serif' font-size='11' fill='#94A3B8'>Pure Weave</text>
      <text x='14' y='146' font-family='sans-serif' font-size='14' font-weight='bold' fill='#F59E0B'>₹8,999</text>
      <rect x='106' y='130' width='44' height='22' rx='6' fill='url(#goldBtn)' />
      <text x='115' y='145' font-family='sans-serif' font-size='11' font-weight='bold' fill='#FFFFFF'>BUY</text>
    </g>

    <g transform='translate(30, 400)'>
      <rect width='160' height='160' rx='16' fill='url(#cardGrad)' stroke='#334155' stroke-width='1' />
      <circle cx='80' cy='55' r='30' fill='#9333EA' fill-opacity='0.2' />
      <text x='80' y='63' font-family='sans-serif' font-size='28' text-anchor='middle'>✨</text>
      <text x='14' y='110' font-family='sans-serif' font-size='13' font-weight='bold' fill='#F8FAFC'>Bridal Heavy Silk</text>
      <text x='14' y='126' font-family='sans-serif' font-size='11' fill='#94A3B8'>Gold Border</text>
      <text x='14' y='146' font-family='sans-serif' font-size='14' font-weight='bold' fill='#F59E0B'>₹24,500</text>
      <rect x='106' y='130' width='44' height='22' rx='6' fill='url(#goldBtn)' />
      <text x='115' y='145' font-family='sans-serif' font-size='11' font-weight='bold' fill='#FFFFFF'>BUY</text>
    </g>

    <g transform='translate(210, 400)'>
      <rect width='160' height='160' rx='16' fill='url(#cardGrad)' stroke='#334155' stroke-width='1' />
      <circle cx='80' cy='55' r='30' fill='#2563EB' fill-opacity='0.2' />
      <text x='80' y='63' font-family='sans-serif' font-size='28' text-anchor='middle'>👘</text>
      <text x='14' y='110' font-family='sans-serif' font-size='13' font-weight='bold' fill='#F8FAFC'>Designer Chanderi</text>
      <text x='14' y='126' font-family='sans-serif' font-size='11' fill='#94A3B8'>Party Wear</text>
      <text x='14' y='146' font-family='sans-serif' font-size='14' font-weight='bold' fill='#F59E0B'>₹3,499</text>
      <rect x='106' y='130' width='44' height='22' rx='6' fill='url(#goldBtn)' />
      <text x='115' y='145' font-family='sans-serif' font-size='11' font-weight='bold' fill='#FFFFFF'>BUY</text>
    </g>

    <rect x='10' y='570' width='400' height='50' rx='25' fill='#020617' />
    <text x='60' y='600' font-family='sans-serif' font-size='11' font-weight='bold' fill='#F59E0B'>🏠 Home</text>
    <text x='150' y='600' font-family='sans-serif' font-size='11' fill='#64748B'>🥻 Sarees</text>
    <text x='230' y='600' font-family='sans-serif' font-size='11' fill='#64748B'>📦 Orders</text>
    <text x='320' y='600' font-family='sans-serif' font-size='11' fill='#64748B'>👤 Account</text>
  </g>
</svg>`;

// 2. Electronics & Mobile Retail SVG
const electronicsSvg = `<svg width='1200' height='800' viewBox='0 0 1200 800' xmlns='http://www.w3.org/2000/svg'>
  <defs>
    <linearGradient id='bgElec' x1='0%' y1='0%' x2='100%' y2='100%'>
      <stop offset='0%' stop-color='#0B1220' />
      <stop offset='50%' stop-color='#070F20' />
      <stop offset='100%' stop-color='#040814' />
    </linearGradient>
    <radialGradient id='cyanGlowElec' cx='75%' cy='35%' r='45%'>
      <stop offset='0%' stop-color='#06B6D4' stop-opacity='0.25' />
      <stop offset='100%' stop-color='#06B6D4' stop-opacity='0' />
    </radialGradient>
    <linearGradient id='cyanBtn' x1='0%' y1='0%' x2='100%' y2='0%'>
      <stop offset='0%' stop-color='#0284C7' />
      <stop offset='100%' stop-color='#06B6D4' />
    </linearGradient>
    <linearGradient id='cardGradElec' x1='0%' y1='0%' x2='0%' y2='100%'>
      <stop offset='0%' stop-color='#1E293B' stop-opacity='0.9' />
      <stop offset='100%' stop-color='#0F172A' stop-opacity='0.9' />
    </linearGradient>
  </defs>

  <rect width='1200' height='800' fill='url(#bgElec)' />
  <rect width='1200' height='800' fill='url(#cyanGlowElec)' />

  <!-- Left Side: Hero Info & Branding -->
  <g transform='translate(80, 160)'>
    <rect width='260' height='36' rx='18' fill='#0C4A6E' fill-opacity='0.8' stroke='#06B6D4' stroke-width='1.5' />
    <text x='20' y='23' font-family='sans-serif' font-size='13' font-weight='bold' fill='#38BDF8' letter-spacing='1'>
      📱 ELECTRONICS &amp; MOBILE STORE
    </text>

    <text x='0' y='100' font-family='sans-serif' font-size='44' font-weight='900' fill='#FFFFFF'>
      Sri Electronics &amp; Mobiles
    </text>
    <text x='0' y='145' font-family='sans-serif' font-size='22' font-weight='700' fill='#06B6D4'>
      ஸ்ரீ எலக்ட்ரானிக்ஸ் மற்றும் மொபைல்ஸ்
    </text>

    <text x='0' y='195' font-family='sans-serif' font-size='16' fill='#94A3B8'>
      E-commerce app for mobile phone shops &amp; electronic showrooms in Tamil Nadu.
    </text>

    <!-- Feature Tags -->
    <g transform='translate(0, 240)'>
      <rect x='0' y='0' width='370' height='50' rx='12' fill='#0F172A' stroke='#334155' stroke-width='1' />
      <circle cx='30' cy='25' r='12' fill='#0369A1' />
      <text x='26' y='30' font-family='sans-serif' font-size='14' fill='#7DD3FC'>✓</text>
      <text x='54' y='22' font-family='sans-serif' font-size='14' font-weight='bold' fill='#F8FAFC'>Smartphones &amp; TVs: ₹2,499 - ₹24,999</text>
      <text x='54' y='38' font-family='sans-serif' font-size='12' fill='#94A3B8'>Top Brand Mobiles, Smart TVs &amp; Audio</text>

      <rect x='0' y='65' width='370' height='50' rx='12' fill='#0F172A' stroke='#334155' stroke-width='1' />
      <circle cx='30' cy='90' r='12' fill='#0D9488' />
      <text x='24' y='95' font-family='sans-serif' font-size='14' fill='#5EEAD4'>💳</text>
      <text x='54' y='87' font-family='sans-serif' font-size='14' font-weight='bold' fill='#F8FAFC'>No-Cost EMI Starting at ₹1,583 / month</text>
      <text x='54' y='103' font-family='sans-serif' font-size='12' fill='#94A3B8'>Instant Bajaj &amp; Card EMI Checkout in ₹</text>

      <rect x='0' y='130' width='370' height='50' rx='12' fill='#0F172A' stroke='#334155' stroke-width='1' />
      <circle cx='30' cy='155' r='12' fill='#4338CA' />
      <text x='24' y='160' font-family='sans-serif' font-size='14' fill='#818CF8'>⚡</text>
      <text x='54' y='152' font-family='sans-serif' font-size='14' font-weight='bold' fill='#F8FAFC'>2-Hour Store Pickup &amp; Express Delivery</text>
      <text x='54' y='168' font-family='sans-serif' font-size='12' fill='#94A3B8'>Store warranty &amp; GST invoice bill</text>
    </g>
  </g>

  <!-- Right Side: Phone Mockup Frame -->
  <g transform='translate(680, 80)'>
    <rect width='420' height='640' rx='44' fill='#020617' stroke='#334155' stroke-width='4' />
    <rect x='10' y='10' width='400' height='620' rx='36' fill='#090F1D' />
    <rect x='150' y='20' width='100' height='18' rx='9' fill='#020617' />

    <!-- App Header -->
    <g transform='translate(30, 50)'>
      <text x='0' y='20' font-family='sans-serif' font-size='16' font-weight='bold' fill='#06B6D4'>SRI ELECTRONICS</text>
      <text x='0' y='36' font-family='sans-serif' font-size='11' fill='#94A3B8'>📍 Tamil Nadu Showrooms</text>
      <rect x='280' y='5' width='60' height='28' rx='14' fill='#0C4A6E' />
      <text x='294' y='23' font-family='sans-serif' font-size='12' font-weight='bold' fill='#38BDF8'>🛒 2</text>
    </g>

    <rect x='30' y='100' width='340' height='38' rx='12' fill='#1E293B' stroke='#334155' stroke-width='1' />
    <text x='46' y='124' font-family='sans-serif' font-size='13' fill='#64748B'>🔍 Search mobiles, laptops, smart TVs...</text>

    <g transform='translate(30, 152)'>
      <rect x='0' y='0' width='90' height='28' rx='14' fill='url(#cyanBtn)' />
      <text x='16' y='18' font-family='sans-serif' font-size='12' font-weight='bold' fill='#FFFFFF'>Mobiles</text>

      <rect x='98' y='0' width='70' height='28' rx='14' fill='#1E293B' />
      <text x='114' y='18' font-family='sans-serif' font-size='12' fill='#94A3B8'>Smart TV</text>

      <rect x='176' y='0' width='75' height='28' rx='14' fill='#1E293B' />
      <text x='192' y='18' font-family='sans-serif' font-size='12' fill='#94A3B8'>Audio</text>

      <rect x='259' y='0' width='80' height='28' rx='14' fill='#1E293B' />
      <text x='275' y='18' font-family='sans-serif' font-size='12' fill='#94A3B8'>Gadgets</text>
    </g>

    <text x='30' y='210' font-family='sans-serif' font-size='14' font-weight='bold' fill='#F8FAFC'>Smartphones &amp; Audio (மொபைல்கள்)</text>

    <!-- 4 Product Cards Grid -->
    <g transform='translate(30, 225)'>
      <rect width='160' height='160' rx='16' fill='url(#cardGradElec)' stroke='#334155' stroke-width='1' />
      <circle cx='80' cy='55' r='30' fill='#0284C7' fill-opacity='0.2' />
      <text x='80' y='63' font-family='sans-serif' font-size='28' text-anchor='middle'>📱</text>
      <text x='14' y='110' font-family='sans-serif' font-size='13' font-weight='bold' fill='#F8FAFC'>5G Smartphone</text>
      <text x='14' y='126' font-family='sans-serif' font-size='11' fill='#94A3B8'>12GB RAM · 256GB</text>
      <text x='14' y='146' font-family='sans-serif' font-size='14' font-weight='bold' fill='#06B6D4'>₹18,999</text>
      <rect x='106' y='130' width='44' height='22' rx='6' fill='url(#cyanBtn)' />
      <text x='115' y='145' font-family='sans-serif' font-size='11' font-weight='bold' fill='#FFFFFF'>BUY</text>
    </g>

    <g transform='translate(210, 225)'>
      <rect width='160' height='160' rx='16' fill='url(#cardGradElec)' stroke='#334155' stroke-width='1' />
      <circle cx='80' cy='55' r='30' fill='#0D9488' fill-opacity='0.2' />
      <text x='80' y='63' font-family='sans-serif' font-size='28' text-anchor='middle'>📺</text>
      <text x='14' y='110' font-family='sans-serif' font-size='13' font-weight='bold' fill='#F8FAFC'>4K Smart LED TV</text>
      <text x='14' y='126' font-family='sans-serif' font-size='11' fill='#94A3B8'>43 Inch Display</text>
      <text x='14' y='146' font-family='sans-serif' font-size='14' font-weight='bold' fill='#06B6D4'>₹24,999</text>
      <rect x='106' y='130' width='44' height='22' rx='6' fill='url(#cyanBtn)' />
      <text x='115' y='145' font-family='sans-serif' font-size='11' font-weight='bold' fill='#FFFFFF'>BUY</text>
    </g>

    <g transform='translate(30, 400)'>
      <rect width='160' height='160' rx='16' fill='url(#cardGradElec)' stroke='#334155' stroke-width='1' />
      <circle cx='80' cy='55' r='30' fill='#4338CA' fill-opacity='0.2' />
      <text x='80' y='63' font-family='sans-serif' font-size='28' text-anchor='middle'>🎧</text>
      <text x='14' y='110' font-family='sans-serif' font-size='13' font-weight='bold' fill='#F8FAFC'>TWS Wireless ANC</text>
      <text x='14' y='126' font-family='sans-serif' font-size='11' fill='#94A3B8'>30-Hour Battery</text>
      <text x='14' y='146' font-family='sans-serif' font-size='14' font-weight='bold' fill='#06B6D4'>₹2,499</text>
      <rect x='106' y='130' width='44' height='22' rx='6' fill='url(#cyanBtn)' />
      <text x='115' y='145' font-family='sans-serif' font-size='11' font-weight='bold' fill='#FFFFFF'>BUY</text>
    </g>

    <g transform='translate(210, 400)'>
      <rect width='160' height='160' rx='16' fill='url(#cardGradElec)' stroke='#334155' stroke-width='1' />
      <circle cx='80' cy='55' r='30' fill='#6D28D9' fill-opacity='0.2' />
      <text x='80' y='63' font-family='sans-serif' font-size='28' text-anchor='middle'>⌚</text>
      <text x='14' y='110' font-family='sans-serif' font-size='13' font-weight='bold' fill='#F8FAFC'>Smartwatch S7</text>
      <text x='14' y='126' font-family='sans-serif' font-size='11' fill='#94A3B8'>AMOLED Display</text>
      <text x='14' y='146' font-family='sans-serif' font-size='14' font-weight='bold' fill='#06B6D4'>₹3,999</text>
      <rect x='106' y='130' width='44' height='22' rx='6' fill='url(#cyanBtn)' />
      <text x='115' y='145' font-family='sans-serif' font-size='11' font-weight='bold' fill='#FFFFFF'>BUY</text>
    </g>

    <rect x='10' y='570' width='400' height='50' rx='25' fill='#020617' />
    <text x='60' y='600' font-family='sans-serif' font-size='11' font-weight='bold' fill='#06B6D4'>🏠 Home</text>
    <text x='150' y='600' font-family='sans-serif' font-size='11' fill='#64748B'>📱 Mobiles</text>
    <text x='230' y='600' font-family='sans-serif' font-size='11' fill='#64748B'>📦 Orders</text>
    <text x='320' y='600' font-family='sans-serif' font-size='11' fill='#64748B'>👤 Account</text>
  </g>
</svg>`;

// Render Both WebP Files
const textilesPath = 'e:\\_downloads\\blue-tech\\public\\images\\industry-textiles.webp';
const electronicsPath = 'e:\\_downloads\\blue-tech\\public\\images\\industry-electronics.webp';

Promise.all([
  sharp(Buffer.from(textilesSvg)).webp({ quality: 95 }).toFile(textilesPath),
  sharp(Buffer.from(electronicsSvg)).webp({ quality: 95 }).toFile(electronicsPath),
]).then(results => {
  console.log('SUCCESSFULLY_RENDERED_TEXTILES_AND_ELECTRONICS_WEBP:', results);
}).catch(err => {
  console.error('ERROR_RENDERING_WEBP:', err);
});
