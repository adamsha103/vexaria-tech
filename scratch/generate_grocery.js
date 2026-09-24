const sharp = require('sharp');
const fs = require('fs');

const svg = `<svg width='1200' height='800' viewBox='0 0 1200 800' xmlns='http://www.w3.org/2000/svg'>
  <defs>
    <linearGradient id='bg' x1='0%' y1='0%' x2='100%' y2='100%'>
      <stop offset='0%' stop-color='#0B1220' />
      <stop offset='50%' stop-color='#070D18' />
      <stop offset='100%' stop-color='#04070E' />
    </linearGradient>
    <radialGradient id='greenGlow' cx='70%' cy='40%' r='45%'>
      <stop offset='0%' stop-color='#10B981' stop-opacity='0.25' />
      <stop offset='100%' stop-color='#10B981' stop-opacity='0' />
    </radialGradient>
    <radialGradient id='cyanGlow' cx='30%' cy='70%' r='40%'>
      <stop offset='0%' stop-color='#06B6D4' stop-opacity='0.2' />
      <stop offset='100%' stop-color='#06B6D4' stop-opacity='0' />
    </radialGradient>
    <linearGradient id='btnGrad' x1='0%' y1='0%' x2='100%' y2='0%'>
      <stop offset='0%' stop-color='#059669' />
      <stop offset='100%' stop-color='#10B981' />
    </linearGradient>
    <linearGradient id='cardGrad' x1='0%' y1='0%' x2='0%' y2='100%'>
      <stop offset='0%' stop-color='#1E293B' stop-opacity='0.9' />
      <stop offset='100%' stop-color='#0F172A' stop-opacity='0.9' />
    </linearGradient>
  </defs>

  <!-- Background Layer -->
  <rect width='1200' height='800' fill='url(#bg)' />
  <rect width='1200' height='800' fill='url(#greenGlow)' />
  <rect width='1200' height='800' fill='url(#cyanGlow)' />

  <!-- Left Side: Hero Info & Tamil Nadu Branding -->
  <g transform='translate(80, 160)'>
    <!-- Badge -->
    <rect width='240' height='36' rx='18' fill='#064E3B' fill-opacity='0.8' stroke='#10B981' stroke-width='1.5' />
    <text x='20' y='23' font-family='sans-serif' font-size='13' font-weight='bold' fill='#34D399' letter-spacing='1'>
      TAMIL NADU GROCERY APP
    </text>

    <!-- Main Title -->
    <text x='0' y='100' font-family='sans-serif' font-size='44' font-weight='900' fill='#FFFFFF'>
      Pasumai Fresh Grocery
    </text>
    <text x='0' y='145' font-family='sans-serif' font-size='22' font-weight='700' fill='#10B981'>
      Fresh Vegetable &amp; Kirana Shop
    </text>

    <text x='0' y='195' font-family='sans-serif' font-size='16' fill='#94A3B8'>
      Direct farm-to-doorstep delivery app with live weight pricing in ₹ (INR).
    </text>

    <!-- Feature Tags -->
    <g transform='translate(0, 240)'>
      <!-- Tag 1 -->
      <rect x='0' y='0' width='360' height='50' rx='12' fill='#0F172A' stroke='#334155' stroke-width='1' />
      <circle cx='30' cy='25' r='12' fill='#065F46' />
      <text x='26' y='30' font-family='sans-serif' font-size='14' fill='#34D399'>✓</text>
      <text x='54' y='22' font-family='sans-serif' font-size='14' font-weight='bold' fill='#F8FAFC'>Live Daily Price: ₹35 - ₹49 / kg</text>
      <text x='54' y='38' font-family='sans-serif' font-size='12' fill='#94A3B8'>Tomatoes, Onions, Carrots &amp; Vegetables</text>

      <!-- Tag 2 -->
      <rect x='0' y='65' width='360' height='50' rx='12' fill='#0F172A' stroke='#334155' stroke-width='1' />
      <circle cx='30' cy='90' r='12' fill='#0284C7' />
      <text x='24' y='95' font-family='sans-serif' font-size='14' fill='#38BDF8'>⚡</text>
      <text x='54' y='87' font-family='sans-serif' font-size='14' font-weight='bold' fill='#F8FAFC'>15-Minute Local Express Delivery</text>
      <text x='54' y='103' font-family='sans-serif' font-size='12' fill='#94A3B8'>Chennai, Coimbatore, Madurai &amp; TN Cities</text>

      <!-- Tag 3 -->
      <rect x='0' y='130' width='360' height='50' rx='12' fill='#0F172A' stroke='#334155' stroke-width='1' />
      <circle cx='30' cy='155' r='12' fill='#059669' />
      <text x='24' y='160' font-family='sans-serif' font-size='14' fill='#6EE7B7'>💬</text>
      <text x='54' y='152' font-family='sans-serif' font-size='14' font-weight='bold' fill='#F8FAFC'>WhatsApp Order &amp; Invoice Billing</text>
      <text x='54' y='168' font-family='sans-serif' font-size='12' fill='#94A3B8'>Instant WhatsApp order confirmation in ₹</text>
    </g>
  </g>

  <!-- Right Side: Phone Mockup Frame -->
  <g transform='translate(680, 80)'>
    <!-- Outer Phone Shell Shadow & Border -->
    <rect width='420' height='640' rx='44' fill='#020617' stroke='#334155' stroke-width='4' />

    <!-- Screen Area -->
    <rect x='10' y='10' width='400' height='620' rx='36' fill='#090F1D' />

    <!-- Phone Notch / Camera Pill -->
    <rect x='150' y='20' width='100' height='18' rx='9' fill='#020617' />

    <!-- App Header -->
    <g transform='translate(30, 50)'>
      <text x='0' y='20' font-family='sans-serif' font-size='16' font-weight='bold' fill='#10B981'>PASUMAI GROCERY</text>
      <text x='0' y='36' font-family='sans-serif' font-size='11' fill='#94A3B8'>📍 Chennai, Tamil Nadu</text>

      <rect x='280' y='5' width='60' height='28' rx='14' fill='#065F46' />
      <text x='294' y='23' font-family='sans-serif' font-size='12' font-weight='bold' fill='#6EE7B7'>🛒 2</text>
    </g>

    <!-- Search Bar -->
    <rect x='30' y='100' width='340' height='38' rx='12' fill='#1E293B' stroke='#334155' stroke-width='1' />
    <text x='46' y='124' font-family='sans-serif' font-size='13' fill='#64748B'>🔍 Search fresh vegetables (Tomatoes, Onions)...</text>

    <!-- Category Pills -->
    <g transform='translate(30, 152)'>
      <rect x='0' y='0' width='90' height='28' rx='14' fill='url(#btnGrad)' />
      <text x='16' y='18' font-family='sans-serif' font-size='12' font-weight='bold' fill='#FFFFFF'>Vegetables</text>

      <rect x='98' y='0' width='70' height='28' rx='14' fill='#1E293B' />
      <text x='114' y='18' font-family='sans-serif' font-size='12' fill='#94A3B8'>Fruits</text>

      <rect x='176' y='0' width='75' height='28' rx='14' fill='#1E293B' />
      <text x='192' y='18' font-family='sans-serif' font-size='12' fill='#94A3B8'>Grocery</text>

      <rect x='259' y='0' width='80' height='28' rx='14' fill='#1E293B' />
      <text x='275' y='18' font-family='sans-serif' font-size='12' fill='#94A3B8'>Organic</text>
    </g>

    <!-- Product Grid Section Header -->
    <text x='30' y='210' font-family='sans-serif' font-size='14' font-weight='bold' fill='#F8FAFC'>Fresh Vegetables (காய்கறிகள்)</text>

    <!-- 4 Product Cards Grid -->
    <!-- Card 1: Tomatoes -->
    <g transform='translate(30, 225)'>
      <rect width='160' height='160' rx='16' fill='url(#cardGrad)' stroke='#334155' stroke-width='1' />
      <circle cx='80' cy='55' r='30' fill='#DC2626' fill-opacity='0.2' />
      <text x='80' y='63' font-family='sans-serif' font-size='28' text-anchor='middle'>🍅</text>
      <text x='14' y='110' font-family='sans-serif' font-size='13' font-weight='bold' fill='#F8FAFC'>Fresh Tomatoes</text>
      <text x='14' y='126' font-family='sans-serif' font-size='11' fill='#94A3B8'>Farm Fresh</text>
      <text x='14' y='146' font-family='sans-serif' font-size='14' font-weight='bold' fill='#10B981'>₹35 / kg</text>
      <rect x='106' y='130' width='44' height='22' rx='6' fill='url(#btnGrad)' />
      <text x='115' y='145' font-family='sans-serif' font-size='11' font-weight='bold' fill='#FFFFFF'>+ ADD</text>
    </g>

    <!-- Card 2: Onions -->
    <g transform='translate(210, 225)'>
      <rect width='160' height='160' rx='16' fill='url(#cardGrad)' stroke='#334155' stroke-width='1' />
      <circle cx='80' cy='55' r='30' fill='#7C3AED' fill-opacity='0.2' />
      <text x='80' y='63' font-family='sans-serif' font-size='28' text-anchor='middle'>🧅</text>
      <text x='14' y='110' font-family='sans-serif' font-size='13' font-weight='bold' fill='#F8FAFC'>Red Onions</text>
      <text x='14' y='126' font-family='sans-serif' font-size='11' fill='#94A3B8'>Local Quality</text>
      <text x='14' y='146' font-family='sans-serif' font-size='14' font-weight='bold' fill='#10B981'>₹49 / kg</text>
      <rect x='106' y='130' width='44' height='22' rx='6' fill='url(#btnGrad)' />
      <text x='115' y='145' font-family='sans-serif' font-size='11' font-weight='bold' fill='#FFFFFF'>+ ADD</text>
    </g>

    <!-- Card 3: Carrots -->
    <g transform='translate(30, 400)'>
      <rect width='160' height='160' rx='16' fill='url(#cardGrad)' stroke='#334155' stroke-width='1' />
      <circle cx='80' cy='55' r='30' fill='#EA580C' fill-opacity='0.2' />
      <text x='80' y='63' font-family='sans-serif' font-size='28' text-anchor='middle'>🥕</text>
      <text x='14' y='110' font-family='sans-serif' font-size='13' font-weight='bold' fill='#F8FAFC'>Ooty Carrots</text>
      <text x='14' y='126' font-family='sans-serif' font-size='11' fill='#94A3B8'>Grade A</text>
      <text x='14' y='146' font-family='sans-serif' font-size='14' font-weight='bold' fill='#10B981'>₹55 / kg</text>
      <rect x='106' y='130' width='44' height='22' rx='6' fill='url(#btnGrad)' />
      <text x='115' y='145' font-family='sans-serif' font-size='11' font-weight='bold' fill='#FFFFFF'>+ ADD</text>
    </g>

    <!-- Card 4: Drumstick -->
    <g transform='translate(210, 400)'>
      <rect width='160' height='160' rx='16' fill='url(#cardGrad)' stroke='#334155' stroke-width='1' />
      <circle cx='80' cy='55' r='30' fill='#16A34A' fill-opacity='0.2' />
      <text x='80' y='63' font-family='sans-serif' font-size='28' text-anchor='middle'>🫛</text>
      <text x='14' y='110' font-family='sans-serif' font-size='13' font-weight='bold' fill='#F8FAFC'>Fresh Drumstick</text>
      <text x='14' y='126' font-family='sans-serif' font-size='11' fill='#94A3B8'>Farm Fresh</text>
      <text x='14' y='146' font-family='sans-serif' font-size='14' font-weight='bold' fill='#10B981'>₹40 / kg</text>
      <rect x='106' y='130' width='44' height='22' rx='6' fill='url(#btnGrad)' />
      <text x='115' y='145' font-family='sans-serif' font-size='11' font-weight='bold' fill='#FFFFFF'>+ ADD</text>
    </g>

    <!-- Bottom Navigation Bar -->
    <rect x='10' y='570' width='400' height='50' rx='25' fill='#020617' />
    <text x='60' y='600' font-family='sans-serif' font-size='11' font-weight='bold' fill='#10B981'>🏠 Home</text>
    <text x='150' y='600' font-family='sans-serif' font-size='11' fill='#64748B'>🥦 Shop</text>
    <text x='230' y='600' font-family='sans-serif' font-size='11' fill='#64748B'>📦 Orders</text>
    <text x='320' y='600' font-family='sans-serif' font-size='11' fill='#64748B'>👤 Account</text>
  </g>
</svg>`;

const outputPath = 'e:\\_downloads\\blue-tech\\public\\images\\industry-grocery.webp';

sharp(Buffer.from(svg))
  .webp({ quality: 95 })
  .toFile(outputPath)
  .then(info => {
    console.log('SUCCESSFULLY_RENDERED_WEBP:', info);
  })
  .catch(err => {
    console.error('ERROR_RENDERING_WEBP:', err);
  });
