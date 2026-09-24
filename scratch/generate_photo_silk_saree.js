const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function generatePhotorealisticSilkSareeWebp() {
  const width = 1200;
  const height = 700;

  // Build a highly detailed, realistic SVG mockup with intricate zari brocade textures, peacock motifs, temple borders, and realistic silk fabric shading.
  const svg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Background Gradients -->
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0B132B" />
        <stop offset="50%" stop-color="#1E1B4B" />
        <stop offset="100%" stop-color="#2D112B" />
      </linearGradient>

      <linearGradient id="navGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#1E1B4B" />
        <stop offset="50%" stop-color="#31103F" />
        <stop offset="100%" stop-color="#4C1D95" />
      </linearGradient>
      
      <linearGradient id="cardBg" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#1E293B" />
        <stop offset="100%" stop-color="#0F172A" />
      </linearGradient>

      <!-- Metallic Gold Gradient -->
      <linearGradient id="goldMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FEF08A" />
        <stop offset="25%" stop-color="#F59E0B" />
        <stop offset="50%" stop-color="#FCD34D" />
        <stop offset="75%" stop-color="#D97706" />
        <stop offset="100%" stop-color="#92400E" />
      </linearGradient>

      <!-- Silk Fabric Highlight Overlay -->
      <linearGradient id="silkSheen" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.35" />
        <stop offset="30%" stop-color="#FFFFFF" stop-opacity="0.05" />
        <stop offset="70%" stop-color="#000000" stop-opacity="0.4" />
        <stop offset="100%" stop-color="#000000" stop-opacity="0.7" />
      </linearGradient>

      <!-- SAREE 1: Royal Peacock Blue Silk -->
      <linearGradient id="blueSilkBase" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0369A1" />
        <stop offset="50%" stop-color="#0284C7" />
        <stop offset="100%" stop-color="#0C4A6E" />
      </linearGradient>

      <!-- SAREE 2: Emerald Green Silk -->
      <linearGradient id="greenSilkBase" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#047857" />
        <stop offset="50%" stop-color="#059669" />
        <stop offset="100%" stop-color="#064E3B" />
      </linearGradient>

      <!-- SAREE 3: Royal Magenta Purple Silk -->
      <linearGradient id="purpleSilkBase" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#7C3AED" />
        <stop offset="50%" stop-color="#6D28D9" />
        <stop offset="100%" stop-color="#4C1D95" />
      </linearGradient>

      <!-- Zari Jacquard Repeated Pattern -->
      <pattern id="zariMotifPattern" width="30" height="30" patternUnits="userSpaceOnUse">
        <path d="M15 2 L20 10 L28 15 L20 20 L15 28 L10 20 L2 15 L10 10 Z" fill="url(#goldMetallic)" opacity="0.3" />
        <circle cx="15" cy="15" r="3" fill="#FDE047" opacity="0.5" />
      </pattern>

      <!-- Zari Paisley/Mango Pattern -->
      <pattern id="paisleyPattern" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M20 5 C28 5, 35 12, 30 22 C25 30, 15 35, 10 25 C5 15, 12 5, 20 5 Z" fill="none" stroke="url(#goldMetallic)" stroke-width="1.2" opacity="0.35" />
        <circle cx="20" cy="20" r="2.5" fill="#FDE047" opacity="0.6" />
      </pattern>

      <!-- Checkered Zari Pattern -->
      <pattern id="checkZariPattern" width="35" height="35" patternUnits="userSpaceOnUse">
        <path d="M 35 0 L 0 0 0 35" fill="none" stroke="url(#goldMetallic)" stroke-width="1" opacity="0.3" />
        <circle cx="17.5" cy="17.5" r="4" fill="url(#goldMetallic)" opacity="0.4" />
      </pattern>

      <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#000000" flood-opacity="0.65"/>
      </filter>
    </defs>

    <!-- Canvas Outer Background -->
    <rect width="${width}" height="${height}" fill="url(#bgGrad)" />
    
    <!-- Background Ambient Glows -->
    <circle cx="250" cy="180" r="250" fill="#0284C7" opacity="0.1" />
    <circle cx="950" cy="550" r="280" fill="#7C3AED" opacity="0.1" />

    <!-- Browser Window Container -->
    <rect x="25" y="25" width="1150" height="650" rx="16" fill="#0F172A" stroke="#334155" stroke-width="2" filter="url(#shadow)" />

    <!-- Browser Title Bar -->
    <rect x="25" y="25" width="1150" height="44" rx="16" fill="#1E293B" />
    <rect x="25" y="59" width="1150" height="10" fill="#1E293B" />
    <circle cx="55" cy="47" r="6" fill="#EF4444" />
    <circle cx="75" cy="47" r="6" fill="#F59E0B" />
    <circle cx="95" cy="47" r="6" fill="#10B981" />

    <!-- URL Address Bar -->
    <rect x="135" y="35" width="700" height="24" rx="12" fill="#0F172A" stroke="#475569" stroke-width="1" />
    <text x="155" y="51" font-family="sans-serif" font-size="12" fill="#38BDF8" font-weight="600">https://kanchipuram-silk-boutique.in/collections/handloom-sarees</text>

    <!-- Navigation Header -->
    <rect x="25" y="69" width="1150" height="58" fill="url(#navGrad)" />
    <text x="55" y="105" font-family="'Georgia', serif" font-size="20" font-weight="bold" fill="url(#goldMetallic)">👑 KANCHIPURAM SILK BOUTIQUE</text>
    
    <!-- Category Tabs -->
    <rect x="360" y="86" width="125" height="28" rx="14" fill="#4338CA" />
    <text x="375" y="105" font-family="sans-serif" font-size="12" font-weight="bold" fill="#FDE047">Kanchi Pattu</text>
    <text x="505" y="104" font-family="sans-serif" font-size="13" fill="#E2E8F0">Bridal Sarees</text>
    <text x="615" y="104" font-family="sans-serif" font-size="13" fill="#E2E8F0">Soft Silk &amp; Tissue</text>
    <text x="745" y="104" font-family="sans-serif" font-size="13" fill="#E2E8F0">Garments &amp; Boutiques</text>

    <!-- Search & Offer Coupon Pill -->
    <rect x="880" y="83" width="140" height="30" rx="15" fill="#BE185D" />
    <text x="895" y="103" font-family="sans-serif" font-size="11" font-weight="bold" fill="#FFFFFF">✨ KANCHI20 (-20%)</text>

    <rect x="1030" y="83" width="120" height="30" rx="6" fill="url(#goldMetallic)" />
    <text x="1048" y="103" font-family="sans-serif" font-size="12" font-weight="bold" fill="#000000">🛒 Cart (3)</text>

    <!-- Sidebar Filters -->
    <rect x="45" y="142" width="220" height="515" rx="10" fill="#1E293B" stroke="#334155" stroke-width="1" />
    
    <text x="65" y="172" font-family="sans-serif" font-size="13" font-weight="bold" fill="#FBBF24">FABRIC SELECTION</text>
    
    <rect x="65" y="187" width="14" height="14" rx="3" fill="#38BDF8" />
    <text x="87" y="199" font-family="sans-serif" font-size="12" fill="#FFFFFF" font-weight="600">Pure Kanchipuram (156)</text>
    
    <rect x="65" y="217" width="14" height="14" rx="3" fill="#0F172A" stroke="#475569" />
    <text x="87" y="229" font-family="sans-serif" font-size="12" fill="#CBD5E1">Soft Silk &amp; Pattu (94)</text>

    <rect x="65" y="247" width="14" height="14" rx="3" fill="#0F172A" stroke="#475569" />
    <text x="87" y="259" font-family="sans-serif" font-size="12" fill="#CBD5E1">Banarasi Brocade (62)</text>

    <text x="65" y="300" font-family="sans-serif" font-size="13" font-weight="bold" fill="#FBBF24">SILK COLOR SHADES</text>
    <circle cx="77" cy="325" r="12" fill="#0284C7" stroke="#FFFFFF" stroke-width="2" />
    <circle cx="109" cy="325" r="12" fill="#059669" />
    <circle cx="141" cy="325" r="12" fill="#7C3AED" />
    <circle cx="173" cy="325" r="12" fill="#D97706" />
    <circle cx="205" cy="325" r="12" fill="#BE185D" />

    <text x="65" y="370" font-family="sans-serif" font-size="13" font-weight="bold" fill="#FBBF24">3D VIRTUAL DRAPING</text>
    <rect x="65" y="385" width="180" height="36" rx="8" fill="#312E81" stroke="#818CF8" stroke-width="1.5" />
    <text x="78" y="408" font-family="sans-serif" font-size="12" fill="#FDE047" font-weight="bold">👗 Live Draping Preview</text>

    <text x="65" y="455" font-family="sans-serif" font-size="13" font-weight="bold" fill="#FBBF24">PAN-INDIA SHIPPING</text>
    <text x="65" y="478" font-family="sans-serif" font-size="11" fill="#34D399" font-weight="600">🚚 Express Doorstep Delivery</text>
    <text x="65" y="496" font-family="sans-serif" font-size="11" fill="#94A3B8">Tracking &amp; Instant Support</text>

    <rect x="65" y="520" width="180" height="110" rx="8" fill="#0F172A" stroke="#334155" stroke-width="1" />
    <text x="77" y="545" font-family="sans-serif" font-size="12" font-weight="bold" fill="#FBBF24">GOVT SILK MARK</text>
    <text x="77" y="565" font-family="sans-serif" font-size="11" fill="#E2E8F0">100% Pure Mulberry Silk</text>
    <text x="77" y="583" font-family="sans-serif" font-size="11" fill="#E2E8F0">Authentic Handloom</text>
    <text x="77" y="605" font-family="sans-serif" font-size="12" font-weight="bold" fill="#10B981">✓ VERIFIED STORE</text>


    <!-- PRODUCT CARD 1: Peacock Blue Saree Photo Visual -->
    <rect x="285" y="142" width="275" height="515" rx="12" fill="url(#cardBg)" stroke="#334155" stroke-width="1.5" />
    
    <!-- REALISTIC SAREE VISUAL 1 -->
    <g>
      <!-- Base Silk Layer -->
      <rect x="300" y="157" width="245" height="240" rx="8" fill="url(#blueSilkBase)" />
      
      <!-- Jacquard Zari Motif Overlay -->
      <rect x="300" y="157" width="245" height="240" rx="8" fill="url(#zariMotifPattern)" />

      <!-- Photorealistic Draped Silk Pleat Layers & Lighting -->
      <path d="M 300 157 C 340 220, 370 280, 380 397 L 300 397 Z" fill="#0284C7" />
      <path d="M 330 157 C 370 220, 410 280, 420 397 L 330 397 Z" fill="url(#silkSheen)" />
      <path d="M 360 157 C 410 230, 450 300, 470 397 L 360 397 Z" fill="#0369A1" />
      <path d="M 400 157 C 450 220, 500 290, 520 397 L 400 397 Z" fill="url(#silkSheen)" />
      <path d="M 450 157 C 490 220, 525 280, 545 397 L 450 397 Z" fill="#075985" />

      <!-- Heavy Temple Zari Border at Bottom -->
      <rect x="300" y="357" width="245" height="40" fill="url(#goldMetallic)" />
      <!-- Temple Gopuram Zari Points -->
      <path d="M300 357 L315 342 L330 357 L345 342 L360 357 L375 342 L390 357 L405 342 L420 357 L435 342 L450 357 L465 342 L480 357 L495 342 L510 357 L525 342 L545 357 Z" fill="url(#goldMetallic)" />
      <text x="312" y="382" font-family="'Georgia', serif" font-size="12" font-weight="bold" fill="#000000">👑 PURE KANCHI GOLD PALLU</text>
    </g>

    <text x="300" y="420" font-family="sans-serif" font-size="15" font-weight="bold" fill="#FFFFFF">Royal Peacock Silk Saree</text>
    <text x="300" y="440" font-family="sans-serif" font-size="12" fill="#38BDF8">Sapphire Blue &amp; Gold Zari</text>
    
    <text x="300" y="475" font-family="sans-serif" font-size="22" font-weight="extrabold" fill="#F59E0B">₹18,500</text>
    <text x="405" y="475" font-family="sans-serif" font-size="13" fill="#94A3B8" text-decoration="line-through">₹23,000</text>

    <text x="300" y="505" font-family="sans-serif" font-size="11" fill="#CBD5E1">Includes Unstitched Blouse Piece</text>
    
    <rect x="300" y="525" width="245" height="40" rx="8" fill="url(#goldMetallic)" />
    <text x="375" y="550" font-family="sans-serif" font-size="13" font-weight="bold" fill="#000000">ADD TO CART</text>

    <rect x="300" y="578" width="245" height="34" rx="6" fill="#0F172A" stroke="#38BDF8" stroke-width="1.5" />
    <text x="345" y="600" font-family="sans-serif" font-size="12" fill="#38BDF8" font-weight="600">📐 Dynamic Size Chart</text>


    <!-- PRODUCT CARD 2: Emerald Green Saree Photo Visual -->
    <rect x="580" y="142" width="275" height="515" rx="12" fill="url(#cardBg)" stroke="#334155" stroke-width="1.5" />
    
    <!-- REALISTIC SAREE VISUAL 2 -->
    <g>
      <!-- Base Green Silk Layer -->
      <rect x="595" y="157" width="245" height="240" rx="8" fill="url(#greenSilkBase)" />
      
      <!-- Paisley Gold Zari Pattern Overlay -->
      <rect x="595" y="157" width="245" height="240" rx="8" fill="url(#paisleyPattern)" />

      <!-- Photorealistic Draped Silk Pleat Layers & Shading -->
      <path d="M 595 157 C 635 220, 665 280, 675 397 L 595 397 Z" fill="#059669" />
      <path d="M 625 157 C 665 220, 705 280, 715 397 L 625 397 Z" fill="url(#silkSheen)" />
      <path d="M 655 157 C 705 230, 745 300, 765 397 L 655 397 Z" fill="#047857" />
      <path d="M 695 157 C 745 220, 795 290, 815 397 L 695 397 Z" fill="url(#silkSheen)" />
      <path d="M 745 157 C 785 220, 820 280, 840 397 L 745 397 Z" fill="#064E3B" />

      <!-- Contrast Crimson Maroon Zari Pallu Border -->
      <rect x="595" y="357" width="245" height="40" fill="#991B1B" stroke="url(#goldMetallic)" stroke-width="2" />
      <path d="M595 357 L610 342 L625 357 L640 342 L655 357 L670 342 L685 357 L700 342 L715 357 L730 342 L745 357 L760 342 L775 357 L790 342 L805 357 L820 342 L840 357 Z" fill="url(#goldMetallic)" />
      <text x="607" y="382" font-family="'Georgia', serif" font-size="12" font-weight="bold" fill="#FDE047">✨ EMBOSSED FLORAL ZARI</text>
    </g>

    <text x="595" y="420" font-family="sans-serif" font-size="15" font-weight="bold" fill="#FFFFFF">Emerald Green Soft Silk</text>
    <text x="595" y="440" font-family="sans-serif" font-size="12" fill="#34D399">Traditional Temple Border</text>
    
    <text x="595" y="475" font-family="sans-serif" font-size="22" font-weight="extrabold" fill="#F59E0B">₹12,999</text>
    <text x="700" y="475" font-family="sans-serif" font-size="13" fill="#94A3B8" text-decoration="line-through">₹16,500</text>

    <text x="595" y="505" font-family="sans-serif" font-size="11" fill="#CBD5E1">Govt Silk Mark Certified</text>
    
    <rect x="595" y="525" width="245" height="40" rx="8" fill="url(#goldMetallic)" />
    <text x="670" y="550" font-family="sans-serif" font-size="13" font-weight="bold" fill="#000000">ADD TO CART</text>

    <rect x="595" y="578" width="245" height="34" rx="6" fill="#0F172A" stroke="#34D399" stroke-width="1.5" />
    <text x="640" y="600" font-family="sans-serif" font-size="12" fill="#34D399" font-weight="600">📐 Dynamic Size Chart</text>


    <!-- PRODUCT CARD 3: Deep Royal Purple Saree Photo Visual -->
    <rect x="875" y="142" width="275" height="515" rx="12" fill="url(#cardBg)" stroke="#334155" stroke-width="1.5" />
    
    <!-- REALISTIC SAREE VISUAL 3 -->
    <g>
      <!-- Base Purple Silk Layer -->
      <rect x="890" y="157" width="245" height="240" rx="8" fill="url(#purpleSilkBase)" />
      
      <!-- Checkered Zari Grid Pattern Overlay -->
      <rect x="890" y="157" width="245" height="240" rx="8" fill="url(#checkZariPattern)" />

      <!-- Photorealistic Draped Silk Pleat Layers & Lighting -->
      <path d="M 890 157 C 930 220, 960 280, 970 397 L 890 397 Z" fill="#7C3AED" />
      <path d="M 920 157 C 960 220, 1000 280, 1010 397 L 920 397 Z" fill="url(#silkSheen)" />
      <path d="M 950 157 C 1000 230, 1040 300, 1060 397 L 950 397 Z" fill="#6D28D9" />
      <path d="M 990 157 C 1040 220, 1090 290, 1110 397 L 990 397 Z" fill="url(#silkSheen)" />
      <path d="M 1040 157 C 1080 220, 1115 280, 1135 397 L 1040 397 Z" fill="#4C1D95" />

      <!-- Heavy Bridal Gold & Silver Zari Border -->
      <rect x="890" y="357" width="245" height="40" fill="url(#goldMetallic)" />
      <path d="M890 357 L905 342 L920 357 L935 342 L950 357 L965 342 L980 357 L995 342 L1010 357 L1025 342 L1040 357 L1055 342 L1070 357 L1085 342 L1100 357 L1115 342 L1135 357 Z" fill="url(#goldMetallic)" />
      <text x="902" y="382" font-family="'Georgia', serif" font-size="12" font-weight="bold" fill="#000000">👑 BRIDAL HEAVY BROCADE</text>
    </g>

    <text x="890" y="420" font-family="sans-serif" font-size="15" font-weight="bold" fill="#FFFFFF">Amethyst Purple Kanchi</text>
    <text x="890" y="440" font-family="sans-serif" font-size="12" fill="#C084FC">Heavy Silver &amp; Gold Zari</text>
    
    <text x="890" y="475" font-family="sans-serif" font-size="22" font-weight="extrabold" fill="#F59E0B">₹24,000</text>
    <text x="995" y="475" font-family="sans-serif" font-size="13" fill="#94A3B8" text-decoration="line-through">₹29,500</text>

    <text x="890" y="505" font-family="sans-serif" font-size="11" fill="#CBD5E1">Custom Draping &amp; Stitching</text>
    
    <rect x="890" y="525" width="245" height="40" rx="8" fill="url(#goldMetallic)" />
    <text x="965" y="550" font-family="sans-serif" font-size="13" font-weight="bold" fill="#000000">ADD TO CART</text>

    <rect x="890" y="578" width="245" height="34" rx="6" fill="#0F172A" stroke="#C084FC" stroke-width="1.5" />
    <text x="935" y="600" font-family="sans-serif" font-size="12" fill="#C084FC" font-weight="600">📐 Dynamic Size Chart</text>

  </svg>
  `;

  const outputPath = path.join(__dirname, '../public/images/industry-textiles.webp');
  await sharp(Buffer.from(svg))
    .webp({ quality: 95 })
    .toFile(outputPath);
  
  console.log('Successfully written photorealistic silk saree WebP to', outputPath);
}

generatePhotorealisticSilkSareeWebp().catch(console.error);
