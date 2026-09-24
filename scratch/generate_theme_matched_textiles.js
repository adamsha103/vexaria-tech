const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function createThemeMatchedTextilesWebp() {
  const width = 1200;
  const height = 700;

  // Uses the exact Cyan/Blue/Slate theme palette of Vexaria Technologies site (#0B132B, #0F172A, #06B6D4, #38BDF8, #10B981)
  const svg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Site Matching Dark Navy/Cyan Background Gradients -->
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0F172A" />
        <stop offset="50%" stop-color="#0B132B" />
        <stop offset="100%" stop-color="#020617" />
      </linearGradient>

      <!-- Store Header Bar (Site Cyan/Blue Gradient) -->
      <linearGradient id="navGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#0F172A" />
        <stop offset="50%" stop-color="#1E293B" />
        <stop offset="100%" stop-color="#0F172A" />
      </linearGradient>
      
      <linearGradient id="cyanBtn" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#06B6D4" />
        <stop offset="100%" stop-color="#3B82F6" />
      </linearGradient>

      <linearGradient id="goldMetallic" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#F59E0B" />
        <stop offset="50%" stop-color="#FCD34D" />
        <stop offset="100%" stop-color="#D97706" />
      </linearGradient>

      <!-- Card Glassmorphism Background -->
      <linearGradient id="cardBg" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#1E293B" />
        <stop offset="100%" stop-color="#0F172A" />
      </linearGradient>

      <!-- SAREE 1: Royal Peacock Blue Silk -->
      <linearGradient id="sareeBlue" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0284C7" />
        <stop offset="50%" stop-color="#0369A1" />
        <stop offset="100%" stop-color="#0C4A6E" />
      </linearGradient>

      <!-- SAREE 2: Emerald Green Silk -->
      <linearGradient id="sareeGreen" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#059669" />
        <stop offset="50%" stop-color="#047857" />
        <stop offset="100%" stop-color="#064E3B" />
      </linearGradient>

      <!-- SAREE 3: Deep Sapphire Cyan Silk -->
      <linearGradient id="sareeSapphire" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1D4ED8" />
        <stop offset="50%" stop-color="#1E3A8A" />
        <stop offset="100%" stop-color="#172554" />
      </linearGradient>

      <!-- Silk Sheen Overlay -->
      <linearGradient id="silkSheen" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.25" />
        <stop offset="40%" stop-color="#FFFFFF" stop-opacity="0.05" />
        <stop offset="100%" stop-color="#000000" stop-opacity="0.5" />
      </linearGradient>

      <!-- Zari Motif Overlay Pattern -->
      <pattern id="zariPattern" width="24" height="24" patternUnits="userSpaceOnUse">
        <path d="M12 2 L16 8 L22 12 L16 16 L12 22 L8 16 L2 12 L8 8 Z" fill="url(#goldMetallic)" opacity="0.35" />
      </pattern>

      <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="10" stdDeviation="14" flood-color="#000000" flood-opacity="0.6"/>
      </filter>
    </defs>

    <!-- Canvas Outer Background -->
    <rect width="${width}" height="${height}" fill="url(#bgGrad)" />
    
    <!-- Site Cyan Glowing Accents -->
    <circle cx="200" cy="150" r="200" fill="#06B6D4" opacity="0.08" />
    <circle cx="1000" cy="550" r="220" fill="#3B82F6" opacity="0.08" />

    <!-- Browser Window Container (Site Dark Theme Match) -->
    <rect x="25" y="25" width="1150" height="650" rx="16" fill="#0B132B" stroke="#1E293B" stroke-width="2" filter="url(#shadow)" />

    <!-- Browser Title Bar -->
    <rect x="25" y="25" width="1150" height="44" rx="16" fill="#1E293B" />
    <rect x="25" y="59" width="1150" height="10" fill="#1E293B" />
    <circle cx="55" cy="47" r="6" fill="#EF4444" />
    <circle cx="75" cy="47" r="6" fill="#F59E0B" />
    <circle cx="95" cy="47" r="6" fill="#10B981" />

    <!-- URL Address Bar -->
    <rect x="135" y="35" width="700" height="24" rx="12" fill="#0F172A" stroke="#334155" stroke-width="1" />
    <text x="155" y="51" font-family="sans-serif" font-size="12" fill="#38BDF8" font-weight="600">https://kanchipuram-silk-boutique.in/collections/handloom-sarees</text>

    <!-- Store Navigation Header -->
    <rect x="25" y="69" width="1150" height="58" fill="url(#navGrad)" stroke-bottom="#334155" />
    <text x="55" y="105" font-family="sans-serif" font-size="20" font-weight="extrabold" fill="url(#cyanBtn)">👑 KANCHIPURAM SILK BOUTIQUE</text>
    
    <!-- Category Tabs -->
    <rect x="420" y="86" width="130" height="28" rx="14" fill="#06B6D4" opacity="0.2" stroke="#06B6D4" stroke-width="1" />
    <text x="435" y="105" font-family="sans-serif" font-size="12" font-weight="bold" fill="#38BDF8">Kanchi Pattu</text>
    <text x="575" y="104" font-family="sans-serif" font-size="13" fill="#E2E8F0">Bridal Sarees</text>
    <text x="685" y="104" font-family="sans-serif" font-size="13" fill="#E2E8F0">Soft Silk &amp; Tissue</text>
    <text x="815" y="104" font-family="sans-serif" font-size="13" fill="#E2E8F0">Boutique Sarees</text>

    <!-- Coupon Badge & Cart Button (Theme Matched Cyan) -->
    <rect x="980" y="83" width="165" height="30" rx="6" fill="url(#cyanBtn)" />
    <text x="995" y="103" font-family="sans-serif" font-size="12" font-weight="bold" fill="#FFFFFF">🛒 Cart (3) | SILK20</text>

    <!-- Sidebar Filter Panel -->
    <rect x="45" y="142" width="220" height="515" rx="10" fill="#0F172A" stroke="#1E293B" stroke-width="1" />
    
    <text x="65" y="172" font-family="sans-serif" font-size="13" font-weight="bold" fill="#38BDF8">FABRIC TYPE</text>
    
    <rect x="65" y="187" width="14" height="14" rx="3" fill="#06B6D4" />
    <text x="87" y="199" font-family="sans-serif" font-size="12" fill="#FFFFFF" font-weight="600">Pure Kanchipuram (156)</text>
    
    <rect x="65" y="217" width="14" height="14" rx="3" fill="#1E293B" stroke="#475569" />
    <text x="87" y="229" font-family="sans-serif" font-size="12" fill="#CBD5E1">Soft Silk &amp; Pattu (94)</text>

    <rect x="65" y="247" width="14" height="14" rx="3" fill="#1E293B" stroke="#475569" />
    <text x="87" y="259" font-family="sans-serif" font-size="12" fill="#CBD5E1">Banarasi Brocade (62)</text>

    <text x="65" y="300" font-family="sans-serif" font-size="13" font-weight="bold" fill="#38BDF8">SILK COLOR SHADES</text>
    <circle cx="77" cy="325" r="12" fill="#0284C7" stroke="#FFFFFF" stroke-width="2" />
    <circle cx="109" cy="325" r="12" fill="#059669" />
    <circle cx="141" cy="325" r="12" fill="#1D4ED8" />
    <circle cx="173" cy="325" r="12" fill="#D97706" />
    <circle cx="205" cy="325" r="12" fill="#06B6D4" />

    <text x="65" y="370" font-family="sans-serif" font-size="13" font-weight="bold" fill="#38BDF8">3D VIRTUAL DRAPING</text>
    <rect x="65" y="385" width="180" height="36" rx="8" fill="#1E293B" stroke="#06B6D4" stroke-width="1.5" />
    <text x="78" y="408" font-family="sans-serif" font-size="12" fill="#38BDF8" font-weight="bold">👗 Live Draping Preview</text>

    <text x="65" y="455" font-family="sans-serif" font-size="13" font-weight="bold" fill="#38BDF8">PAN-INDIA SHIPPING</text>
    <text x="65" y="478" font-family="sans-serif" font-size="11" fill="#10B981" font-weight="600">🚚 Free Express Delivery</text>
    <text x="65" y="496" font-family="sans-serif" font-size="11" fill="#94A3B8">Tracking &amp; Instant Support</text>

    <rect x="65" y="520" width="180" height="110" rx="8" fill="#162032" stroke="#1E293B" stroke-width="1" />
    <text x="77" y="545" font-family="sans-serif" font-size="12" font-weight="bold" fill="#38BDF8">GOVT SILK MARK</text>
    <text x="77" y="565" font-family="sans-serif" font-size="11" fill="#E2E8F0">100% Pure Mulberry Silk</text>
    <text x="77" y="583" font-family="sans-serif" font-size="11" fill="#E2E8F0">Authentic Handloom</text>
    <text x="77" y="605" font-family="sans-serif" font-size="12" font-weight="bold" fill="#10B981">✓ VERIFIED STORE</text>


    <!-- PRODUCT CARD 1: Royal Peacock Blue Silk -->
    <rect x="285" y="142" width="275" height="515" rx="12" fill="url(#cardBg)" stroke="#334155" stroke-width="1.5" />
    
    <!-- SAREE VISUAL 1 -->
    <g>
      <rect x="300" y="157" width="245" height="240" rx="8" fill="url(#sareeBlue)" />
      <rect x="300" y="157" width="245" height="240" rx="8" fill="url(#zariPattern)" />
      
      <!-- Pleats & Draping Shading -->
      <path d="M 300 157 C 340 220, 370 280, 380 397 L 300 397 Z" fill="#0284C7" />
      <path d="M 330 157 C 370 220, 410 280, 420 397 L 330 397 Z" fill="url(#silkSheen)" />
      <path d="M 380 157 C 420 230, 460 300, 480 397 L 380 397 Z" fill="#0369A1" />

      <!-- Gold Zari Pallu Border -->
      <rect x="300" y="357" width="245" height="40" fill="url(#goldMetallic)" />
      <path d="M300 357 L315 342 L330 357 L345 342 L360 357 L375 342 L390 357 L405 342 L420 357 L435 342 L450 357 L465 342 L480 357 L495 342 L510 357 L525 342 L545 357 Z" fill="url(#goldMetallic)" />
      <text x="312" y="382" font-family="sans-serif" font-size="12" font-weight="bold" fill="#000000">👑 PURE KANCHI GOLD PALLU</text>
    </g>

    <text x="300" y="420" font-family="sans-serif" font-size="15" font-weight="bold" fill="#FFFFFF">Royal Peacock Silk Saree</text>
    <text x="300" y="440" font-family="sans-serif" font-size="12" fill="#38BDF8">Sapphire Blue &amp; Gold Zari</text>
    
    <text x="300" y="475" font-family="sans-serif" font-size="22" font-weight="extrabold" fill="#38BDF8">₹18,500</text>
    <text x="405" y="475" font-family="sans-serif" font-size="13" fill="#94A3B8" text-decoration="line-through">₹23,000</text>

    <text x="300" y="505" font-family="sans-serif" font-size="11" fill="#10B981">✓ Includes Unstitched Blouse</text>
    
    <rect x="300" y="525" width="245" height="40" rx="8" fill="url(#cyanBtn)" />
    <text x="375" y="550" font-family="sans-serif" font-size="13" font-weight="bold" fill="#FFFFFF">ADD TO CART</text>

    <rect x="300" y="578" width="245" height="34" rx="6" fill="#0F172A" stroke="#334155" stroke-width="1.5" />
    <text x="345" y="600" font-family="sans-serif" font-size="12" fill="#E2E8F0">📐 Dynamic Size Chart</text>


    <!-- PRODUCT CARD 2: Emerald Green Silk -->
    <rect x="580" y="142" width="275" height="515" rx="12" fill="url(#cardBg)" stroke="#334155" stroke-width="1.5" />
    
    <!-- SAREE VISUAL 2 -->
    <g>
      <rect x="595" y="157" width="245" height="240" rx="8" fill="url(#sareeGreen)" />
      <rect x="595" y="157" width="245" height="240" rx="8" fill="url(#zariPattern)" />
      
      <path d="M 595 157 C 635 220, 665 280, 675 397 L 595 397 Z" fill="#059669" />
      <path d="M 625 157 C 665 220, 705 280, 715 397 L 625 397 Z" fill="url(#silkSheen)" />
      <path d="M 675 157 C 715 230, 755 300, 775 397 L 675 397 Z" fill="#047857" />

      <rect x="595" y="357" width="245" height="40" fill="url(#goldMetallic)" />
      <path d="M595 357 L610 342 L625 357 L640 342 L655 357 L670 342 L685 357 L700 342 L715 357 L730 342 L745 357 L760 342 L775 357 L790 342 L805 357 L820 342 L840 357 Z" fill="url(#goldMetallic)" />
      <text x="607" y="382" font-family="sans-serif" font-size="12" font-weight="bold" fill="#000000">✨ EMBOSSED FLORAL ZARI</text>
    </g>

    <text x="595" y="420" font-family="sans-serif" font-size="15" font-weight="bold" fill="#FFFFFF">Emerald Green Soft Silk</text>
    <text x="595" y="440" font-family="sans-serif" font-size="12" fill="#34D399">Traditional Temple Border</text>
    
    <text x="595" y="475" font-family="sans-serif" font-size="22" font-weight="extrabold" fill="#38BDF8">₹12,999</text>
    <text x="700" y="475" font-family="sans-serif" font-size="13" fill="#94A3B8" text-decoration="line-through">₹16,500</text>

    <text x="595" y="505" font-family="sans-serif" font-size="11" fill="#10B981">✓ Govt Silk Mark Certified</text>
    
    <rect x="595" y="525" width="245" height="40" rx="8" fill="url(#cyanBtn)" />
    <text x="670" y="550" font-family="sans-serif" font-size="13" font-weight="bold" fill="#FFFFFF">ADD TO CART</text>

    <rect x="595" y="578" width="245" height="34" rx="6" fill="#0F172A" stroke="#334155" stroke-width="1.5" />
    <text x="640" y="600" font-family="sans-serif" font-size="12" fill="#E2E8F0">📐 Dynamic Size Chart</text>


    <!-- PRODUCT CARD 3: Deep Sapphire Blue Silk -->
    <rect x="875" y="142" width="275" height="515" rx="12" fill="url(#cardBg)" stroke="#334155" stroke-width="1.5" />
    
    <!-- SAREE VISUAL 3 -->
    <g>
      <rect x="890" y="157" width="245" height="240" rx="8" fill="url(#sareeSapphire)" />
      <rect x="890" y="157" width="245" height="240" rx="8" fill="url(#zariPattern)" />
      
      <path d="M 890 157 C 930 220, 960 280, 970 397 L 890 397 Z" fill="#1D4ED8" />
      <path d="M 920 157 C 960 220, 1000 280, 1010 397 L 920 397 Z" fill="url(#silkSheen)" />
      <path d="M 970 157 C 1010 230, 1050 300, 1070 397 L 970 397 Z" fill="#1E3A8A" />

      <rect x="890" y="357" width="245" height="40" fill="url(#goldMetallic)" />
      <path d="M890 357 L905 342 L920 357 L935 342 L950 357 L965 342 L980 357 L995 342 L1010 357 L1025 342 L1040 357 L1055 342 L1070 357 L1085 342 L1100 357 L1115 342 L1135 357 Z" fill="url(#goldMetallic)" />
      <text x="902" y="382" font-family="sans-serif" font-size="12" font-weight="bold" fill="#000000">👑 BRIDAL HEAVY BROCADE</text>
    </g>

    <text x="890" y="420" font-family="sans-serif" font-size="15" font-weight="bold" fill="#FFFFFF">Sapphire Kanchi Pattu</text>
    <text x="890" y="440" font-family="sans-serif" font-size="12" fill="#38BDF8">Heavy Silver &amp; Gold Zari</text>
    
    <text x="890" y="475" font-family="sans-serif" font-size="22" font-weight="extrabold" fill="#38BDF8">₹24,000</text>
    <text x="995" y="475" font-family="sans-serif" font-size="13" fill="#94A3B8" text-decoration="line-through">₹29,500</text>

    <text x="890" y="505" font-family="sans-serif" font-size="11" fill="#10B981">✓ Custom Draping &amp; Stitching</text>
    
    <rect x="890" y="525" width="245" height="40" rx="8" fill="url(#cyanBtn)" />
    <text x="965" y="550" font-family="sans-serif" font-size="13" font-weight="bold" fill="#FFFFFF">ADD TO CART</text>

    <rect x="890" y="578" width="245" height="34" rx="6" fill="#0F172A" stroke="#334155" stroke-width="1.5" />
    <text x="935" y="600" font-family="sans-serif" font-size="12" fill="#E2E8F0">📐 Dynamic Size Chart</text>

  </svg>
  `;

  const outputPath = path.join(__dirname, '../public/images/industry-textiles.webp');
  await sharp(Buffer.from(svg))
    .webp({ quality: 95 })
    .toFile(outputPath);
  
  console.log('Successfully written site-theme-matched WebP to', outputPath);
}

createThemeMatchedTextilesWebp().catch(console.error);
