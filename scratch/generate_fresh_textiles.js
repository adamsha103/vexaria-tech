const sharp = require('sharp');
const fs = require('fs');

const svg = `<svg width='1200' height='800' viewBox='0 0 1200 800' xmlns='http://www.w3.org/2000/svg'>
  <defs>
    <linearGradient id='bgSaree' x1='0%' y1='0%' x2='100%' y2='100%'>
      <stop offset='0%' stop-color='#4C0519' />
      <stop offset='50%' stop-color='#881337' />
      <stop offset='100%' stop-color='#1E030B' />
    </linearGradient>
    <radialGradient id='goldGlow' cx='70%' cy='35%' r='50%'>
      <stop offset='0%' stop-color='#F59E0B' stop-opacity='0.3' />
      <stop offset='100%' stop-color='#F59E0B' stop-opacity='0' />
    </radialGradient>
    <linearGradient id='goldBtn' x1='0%' y1='0%' x2='100%' y2='0%'>
      <stop offset='0%' stop-color='#B45309' />
      <stop offset='100%' stop-color='#F59E0B' />
    </linearGradient>
    <linearGradient id='cardGrad' x1='0%' y1='0%' x2='0%' y2='100%'>
      <stop offset='0%' stop-color='#1F1929' stop-opacity='0.95' />
      <stop offset='100%' stop-color='#0F0B15' stop-opacity='0.95' />
    </linearGradient>
  </defs>

  <!-- Background Layer -->
  <rect width='1200' height='800' fill='url(#bgSaree)' />
  <rect width='1200' height='800' fill='url(#goldGlow)' />

  <!-- Left Side: Tamil Nadu Silk Showroom Branding -->
  <g transform='translate(80, 160)'>
    <rect width='280' height='36' rx='18' fill='#78350F' fill-opacity='0.85' stroke='#F59E0B' stroke-width='1.5' />
    <text x='20' y='23' font-family='sans-serif' font-size='13' font-weight='bold' fill='#FDE68A' letter-spacing='1'>
      🥻 KANCHIPURAM SILK SAREES APP
    </text>

    <text x='0' y='100' font-family='sans-serif' font-size='44' font-weight='900' fill='#FFFFFF'>
      Kanchi Pattu Silks
    </text>
    <text x='0' y='145' font-family='sans-serif' font-size='22' font-weight='700' fill='#F59E0B'>
      காஞ்சி பட்டு புடவைகள் மற்றும் ஆடை கடை
    </text>

    <text x='0' y='195' font-family='sans-serif' font-size='16' fill='#FDA4AF'>
      Pure handloom silk sarees &amp; garments showroom app with ₹ billing.
    </text>

    <!-- Feature Badges -->
    <g transform='translate(0, 240)'>
      <rect x='0' y='0' width='370' height='50' rx='12' fill='#1F1929' stroke='#881337' stroke-width='1.5' />
      <circle cx='30' cy='25' r='12' fill='#B45309' />
      <text x='26' y='30' font-family='sans-serif' font-size='14' fill='#FDE68A'>✓</text>
      <text x='54' y='22' font-family='sans-serif' font-size='14' font-weight='bold' fill='#F8FAFC'>Authentic Kanchipuram Silk: ₹9,999 - ₹28,500</text>
      <text x='54' y='38' font-family='sans-serif' font-size='12' fill='#FDA4AF'>Zari Border, Soft Silk &amp; Bridal Collections</text>

      <rect x='0' y='65' width='370' height='50' rx='12' fill='#1F1929' stroke='#881337' stroke-width='1.5' />
      <circle cx='30' cy='90' r='12' fill='#831843' />
      <text x='24' y='95' font-family='sans-serif' font-size='14' fill='#F472B6'>✨</text>
      <text x='54' y='87' font-family='sans-serif' font-size='14' font-weight='bold' fill='#F8FAFC'>Custom Blouse &amp; Size Customization</text>
      <text x='54' y='103' font-family='sans-serif' font-size='12' fill='#FDA4AF'>Filter by Silk Weave, Color &amp; Festival</text>

      <rect x='0' y='130' width='370' height='50' rx='12' fill='#1F1929' stroke='#881337' stroke-width='1.5' />
      <circle cx='30' cy='155' r='12' fill='#047857' />
      <text x='24' y='160' font-family='sans-serif' font-size='14' fill='#6EE7B7'>✈️</text>
      <text x='54' y='152' font-family='sans-serif' font-size='14' font-weight='bold' fill='#F8FAFC'>Express Worldwide Store Delivery</text>
      <text x='54' y='168' font-family='sans-serif' font-size='12' fill='#FDA4AF'>Direct showroom dispatch with WhatsApp tracking</text>
    </g>
  </g>

  <!-- Right Side: Phone Mockup Frame -->
  <g transform='translate(680, 80)'>
    <rect width='420' height='640' rx='44' fill='#020617' stroke='#881337' stroke-width='4' />
    <rect x='10' y='10' width='400' height='620' rx='36' fill='#0D0714' />
    <rect x='150' y='20' width='100' height='18' rx='9' fill='#020617' />

    <!-- App Header -->
    <g transform='translate(30, 50)'>
      <text x='0' y='20' font-family='sans-serif' font-size='16' font-weight='bold' fill='#F59E0B'>KANCHI PATTU SILKS</text>
      <text x='0' y='36' font-family='sans-serif' font-size='11' fill='#FDA4AF'>📍 Kanchipuram &amp; Chennai Showrooms</text>
      <rect x='280' y='5' width='60' height='28' rx='14' fill='#78350F' />
      <text x='294' y='23' font-family='sans-serif' font-size='12' font-weight='bold' fill='#FDE68A'>🛍️ 4</text>
    </g>

    <!-- Search Bar -->
    <rect x='30' y='100' width='340' height='38' rx='12' fill='#1F1929' stroke='#4C0519' stroke-width='1' />
    <text x='46' y='124' font-family='sans-serif' font-size='13' fill='#94A3B8'>🔍 Search Kanchipuram pattu sarees...</text>

    <!-- Category Pills -->
    <g transform='translate(30, 152)'>
      <rect x='0' y='0' width='90' height='28' rx='14' fill='url(#goldBtn)' />
      <text x='16' y='18' font-family='sans-serif' font-size='12' font-weight='bold' fill='#FFFFFF'>Silk Sarees</text>

      <rect x='98' y='0' width='70' height='28' rx='14' fill='#1F1929' />
      <text x='114' y='18' font-family='sans-serif' font-size='12' fill='#FDA4AF'>Bridal</text>

      <rect x='176' y='0' width='75' height='28' rx='14' fill='#1F1929' />
      <text x='192' y='18' font-family='sans-serif' font-size='12' fill='#FDA4AF'>Soft Silk</text>

      <rect x='259' y='0' width='80' height='28' rx='14' fill='#1F1929' />
      <text x='275' y='18' font-family='sans-serif' font-size='12' fill='#FDA4AF'>Garments</text>
    </g>

    <text x='30' y='210' font-family='sans-serif' font-size='14' font-weight='bold' fill='#F8FAFC'>Silk Sarees Catalog (பட்டு புடவைகள்)</text>

    <!-- 4 Product Cards Grid -->
    <g transform='translate(30, 225)'>
      <rect width='160' height='160' rx='16' fill='url(#cardGrad)' stroke='#881337' stroke-width='1' />
      <circle cx='80' cy='55' r='30' fill='#B45309' fill-opacity='0.25' />
      <text x='80' y='63' font-family='sans-serif' font-size='28' text-anchor='middle'>🥻</text>
      <text x='14' y='110' font-family='sans-serif' font-size='13' font-weight='bold' fill='#F8FAFC'>Kanjivaram Zari</text>
      <text x='14' y='126' font-family='sans-serif' font-size='11' fill='#FDA4AF'>Gold Zari Weave</text>
      <text x='14' y='146' font-family='sans-serif' font-size='14' font-weight='bold' fill='#F59E0B'>₹16,500</text>
      <rect x='100' y='130' width='52' height='22' rx='6' fill='url(#goldBtn)' />
      <text x='106' y='145' font-family='sans-serif' font-size='10' font-weight='bold' fill='#FFFFFF'>SHOP NOW</text>
    </g>

    <g transform='translate(210, 225)'>
      <rect width='160' height='160' rx='16' fill='url(#cardGrad)' stroke='#881337' stroke-width='1' />
      <circle cx='80' cy='55' r='30' fill='#9F1239' fill-opacity='0.25' />
      <text x='80' y='63' font-family='sans-serif' font-size='28' text-anchor='middle'>👗</text>
      <text x='14' y='110' font-family='sans-serif' font-size='13' font-weight='bold' fill='#F8FAFC'>Pure Soft Silk</text>
      <text x='14' y='126' font-family='sans-serif' font-size='11' fill='#FDA4AF'>Handloom Pattu</text>
      <text x='14' y='146' font-family='sans-serif' font-size='14' font-weight='bold' fill='#F59E0B'>₹9,999</text>
      <rect x='100' y='130' width='52' height='22' rx='6' fill='url(#goldBtn)' />
      <text x='106' y='145' font-family='sans-serif' font-size='10' font-weight='bold' fill='#FFFFFF'>SHOP NOW</text>
    </g>

    <g transform='translate(30, 400)'>
      <rect width='160' height='160' rx='16' fill='url(#cardGrad)' stroke='#881337' stroke-width='1' />
      <circle cx='80' cy='55' r='30' fill='#7E22CE' fill-opacity='0.25' />
      <text x='80' y='63' font-family='sans-serif' font-size='28' text-anchor='middle'>✨</text>
      <text x='14' y='110' font-family='sans-serif' font-size='13' font-weight='bold' fill='#F8FAFC'>Bridal Heavy Silk</text>
      <text x='14' y='126' font-family='sans-serif' font-size='11' fill='#FDA4AF'>Rich Marriage Weave</text>
      <text x='14' y='146' font-family='sans-serif' font-size='14' font-weight='bold' fill='#F59E0B'>₹28,500</text>
      <rect x='100' y='130' width='52' height='22' rx='6' fill='url(#goldBtn)' />
      <text x='106' y='145' font-family='sans-serif' font-size='10' font-weight='bold' fill='#FFFFFF'>SHOP NOW</text>
    </g>

    <g transform='translate(210, 400)'>
      <rect width='160' height='160' rx='16' fill='url(#cardGrad)' stroke='#881337' stroke-width='1' />
      <circle cx='80' cy='55' r='30' fill='#BE185D' fill-opacity='0.25' />
      <text x='80' y='63' font-family='sans-serif' font-size='28' text-anchor='middle'>👘</text>
      <text x='14' y='110' font-family='sans-serif' font-size='13' font-weight='bold' fill='#F8FAFC'>Cotton Silk Suit</text>
      <text x='14' y='126' font-family='sans-serif' font-size='11' fill='#FDA4AF'>Designer Salwar</text>
      <text x='14' y='146' font-family='sans-serif' font-size='14' font-weight='bold' fill='#F59E0B'>₹4,250</text>
      <rect x='100' y='130' width='52' height='22' rx='6' fill='url(#goldBtn)' />
      <text x='106' y='145' font-family='sans-serif' font-size='10' font-weight='bold' fill='#FFFFFF'>SHOP NOW</text>
    </g>

    <!-- Bottom Navigation Bar -->
    <rect x='10' y='570' width='400' height='50' rx='25' fill='#020617' />
    <text x='60' y='600' font-family='sans-serif' font-size='11' font-weight='bold' fill='#F59E0B'>🏠 Home</text>
    <text x='150' y='600' font-family='sans-serif' font-size='11' fill='#FDA4AF'>🥻 Sarees</text>
    <text x='230' y='600' font-family='sans-serif' font-size='11' fill='#64748B'>📦 Orders</text>
    <text x='320' y='600' font-family='sans-serif' font-size='11' fill='#64748B'>👤 Account</text>
  </g>
</svg>`;

const outputPath = 'e:\\_downloads\\blue-tech\\public\\images\\industry-textiles.webp';

sharp(Buffer.from(svg))
  .webp({ quality: 95 })
  .toFile(outputPath)
  .then(info => {
    console.log('SUCCESSFULLY_RENDERED_FRESH_TEXTILES_WEBP:', info);
  })
  .catch(err => {
    console.error('ERROR_RENDERING_TEXTILES_WEBP:', err);
  });
