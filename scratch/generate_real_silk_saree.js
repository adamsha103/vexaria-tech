const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function createRealisticSilkSareeWebp() {
  const width = 1200;
  const height = 700;

  const svg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Background Gradients -->
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0B132B" />
        <stop offset="50%" stop-color="#1C1B40" />
        <stop offset="100%" stop-color="#2D112B" />
      </linearGradient>

      <linearGradient id="navGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#1E1B4B" />
        <stop offset="100%" stop-color="#31103F" />
      </linearGradient>
      
      <linearGradient id="cardBg" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#1E293B" />
        <stop offset="100%" stop-color="#0F172A" />
      </linearGradient>

      <linearGradient id="goldShine" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FDE047" />
        <stop offset="30%" stop-color="#F59E0B" />
        <stop offset="70%" stop-color="#D97706" />
        <stop offset="100%" stop-color="#B45309" />
      </linearGradient>

      <linearGradient id="goldText" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#FDE047" />
        <stop offset="50%" stop-color="#F59E0B" />
        <stop offset="100%" stop-color="#FBBF24" />
      </linearGradient>

      <!-- SAREE 1: Royal Peacock Blue Fabric & Draping Patterns -->
      <linearGradient id="sareeBlue" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0284C7" />
        <stop offset="40%" stop-color="#0369A1" />
        <stop offset="80%" stop-color="#075985" />
        <stop offset="100%" stop-color="#0C4A6E" />
      </linearGradient>

      <!-- SAREE 2: Emerald Green Fabric Patterns -->
      <linearGradient id="sareeGreen" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#059669" />
        <stop offset="40%" stop-color="#047857" />
        <stop offset="80%" stop-color="#065F46" />
        <stop offset="100%" stop-color="#064E3B" />
      </linearGradient>

      <!-- SAREE 3: Deep Royal Purple Fabric Patterns -->
      <linearGradient id="sareePurple" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#8B5CF6" />
        <stop offset="40%" stop-color="#7C3AED" />
        <stop offset="80%" stop-color="#6D28D9" />
        <stop offset="100%" stop-color="#4C1D95" />
      </linearGradient>

      <!-- Fabric Fold Overlay Shadow -->
      <linearGradient id="foldShadow" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#000000" stop-opacity="0.4" />
        <stop offset="50%" stop-color="#FFFFFF" stop-opacity="0.15" />
        <stop offset="100%" stop-color="#000000" stop-opacity="0.5" />
      </linearGradient>

      <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#000000" flood-opacity="0.65"/>
      </filter>
    </defs>

    <!-- Canvas Background -->
    <rect width="${width}" height="${height}" fill="url(#bgGrad)" />
    
    <!-- Background Glows -->
    <circle cx="250" cy="180" r="250" fill="#38BDF8" opacity="0.08" />
    <circle cx="950" cy="550" r="280" fill="#C084FC" opacity="0.08" />

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
    <text x="155" y="51" font-family="sans-serif" font-size="12" fill="#38BDF8" font-weight="600">https://kanchi-silk-showroom.in/kanchipuram-silk-sarees</text>

    <!-- Navigation Header -->
    <rect x="25" y="69" width="1150" height="58" fill="url(#navGrad)" />
    <text x="55" y="105" font-family="'Georgia', serif" font-size="20" font-weight="bold" fill="url(#goldText)">👑 KANCHI SILKS SHOWROOM</text>
    
    <!-- Category Tabs -->
    <rect x="360" y="86" width="120" height="28" rx="14" fill="#4338CA" />
    <text x="375" y="105" font-family="sans-serif" font-size="12" font-weight="bold" fill="#FDE047">Kanchi Silk</text>
    <text x="500" y="104" font-family="sans-serif" font-size="13" fill="#E2E8F0">Bridal Sarees</text>
    <text x="610" y="104" font-family="sans-serif" font-size="13" fill="#E2E8F0">Soft Silk &amp; Pattu</text>
    <text x="740" y="104" font-family="sans-serif" font-size="13" fill="#E2E8F0">Garments &amp; Boutiques</text>

    <!-- Search & Offer Coupon Pill -->
    <rect x="880" y="83" width="140" height="30" rx="15" fill="#BE185D" />
    <text x="895" y="103" font-family="sans-serif" font-size="11" font-weight="bold" fill="#FFFFFF">✨ KANCHI20 (-20%)</text>

    <rect x="1030" y="83" width="120" height="30" rx="6" fill="url(#goldShine)" />
    <text x="1048" y="103" font-family="sans-serif" font-size="12" font-weight="bold" fill="#000000">🛒 Cart (3)</text>

    <!-- Sidebar Filters -->
    <rect x="45" y="142" width="220" height="515" rx="10" fill="#1E293B" stroke="#334155" stroke-width="1" />
    
    <text x="65" y="172" font-family="sans-serif" font-size="13" font-weight="bold" fill="#FBBF24">FILTER BY FABRIC</text>
    
    <rect x="65" y="187" width="14" height="14" rx="3" fill="#38BDF8" />
    <text x="87" y="199" font-family="sans-serif" font-size="12" fill="#FFFFFF" font-weight="600">Pure Kanchipuram (156)</text>
    
    <rect x="65" y="217" width="14" height="14" rx="3" fill="#0F172A" stroke="#475569" />
    <text x="87" y="229" font-family="sans-serif" font-size="12" fill="#CBD5E1">Soft Silk &amp; Pattu (94)</text>

    <rect x="65" y="247" width="14" height="14" rx="3" fill="#0F172A" stroke="#475569" />
    <text x="87" y="259" font-family="sans-serif" font-size="12" fill="#CBD5E1">Banarasi Brocade (62)</text>

    <text x="65" y="300" font-family="sans-serif" font-size="13" font-weight="bold" fill="#FBBF24">COLOR SHADES</text>
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
    <text x="77" y="583" font-family="sans-serif" font-size="11" fill="#E2E8F0">Certified Authenticity</text>
    <text x="77" y="605" font-family="sans-serif" font-size="12" font-weight="bold" fill="#10B981">✓ VERIFIED STORE</text>


    <!-- PRODUCT CARD 1: Peacock Blue Saree -->
    <rect x="285" y="142" width="275" height="515" rx="12" fill="url(#cardBg)" stroke="#334155" stroke-width="1.5" />
    
    <!-- SAREE IMAGE AREA 1 -->
    <g>
      <rect x="300" y="157" width="245" height="240" rx="8" fill="url(#sareeBlue)" />
      <!-- Silk folds texture lines -->
      <path d="M 300 180 Q 370 240 430 180 T 545 220 L 545 397 L 300 397 Z" fill="url(#foldShadow)" />
      <path d="M 300 240 Q 390 310 470 230 T 545 280" stroke="#FDE047" stroke-width="1.5" fill="none" opacity="0.4" />
      
      <!-- Detailed Gold Zari Pallu Border -->
      <rect x="300" y="357" width="245" height="40" fill="url(#goldShine)" />
      <!-- Traditional Zari Motif Icons -->
      <circle cx="330" cy="377" r="8" fill="#92400E" />
      <circle cx="370" cy="377" r="8" fill="#92400E" />
      <circle cx="410" cy="377" r="8" fill="#92400E" />
      <circle cx="450" cy="377" r="8" fill="#92400E" />
      <circle cx="490" cy="377" r="8" fill="#92400E" />
      <text x="312" y="381" font-family="'Georgia', serif" font-size="12" font-weight="bold" fill="#FFFFFF">👑 PURE GOLD ZARI PALLU</text>
    </g>

    <text x="300" y="420" font-family="sans-serif" font-size="15" font-weight="bold" fill="#FFFFFF">Royal Peacock Silk Saree</text>
    <text x="300" y="440" font-family="sans-serif" font-size="12" fill="#38BDF8">Sapphire Blue &amp; Gold Brocade</text>
    
    <text x="300" y="475" font-family="sans-serif" font-size="22" font-weight="extrabold" fill="#F59E0B">₹18,500</text>
    <text x="405" y="475" font-family="sans-serif" font-size="13" fill="#94A3B8" text-decoration="line-through">₹23,000</text>

    <text x="300" y="505" font-family="sans-serif" font-size="11" fill="#CBD5E1">Includes Unstitched Blouse Piece</text>
    
    <rect x="300" y="525" width="245" height="40" rx="8" fill="url(#goldShine)" />
    <text x="375" y="550" font-family="sans-serif" font-size="13" font-weight="bold" fill="#000000">ADD TO CART</text>

    <rect x="300" y="578" width="245" height="34" rx="6" fill="#0F172A" stroke="#38BDF8" stroke-width="1.5" />
    <text x="345" y="600" font-family="sans-serif" font-size="12" fill="#38BDF8" font-weight="600">📐 Dynamic Size Chart</text>


    <!-- PRODUCT CARD 2: Emerald Green Saree -->
    <rect x="580" y="142" width="275" height="515" rx="12" fill="url(#cardBg)" stroke="#334155" stroke-width="1.5" />
    
    <!-- SAREE IMAGE AREA 2 -->
    <g>
      <rect x="595" y="157" width="245" height="240" rx="8" fill="url(#sareeGreen)" />
      <!-- Silk folds texture lines -->
      <path d="M 595 190 Q 670 250 730 190 T 840 230 L 840 397 L 595 397 Z" fill="url(#foldShadow)" />
      <path d="M 595 250 Q 680 320 760 240 T 840 290" stroke="#FDE047" stroke-width="1.5" fill="none" opacity="0.4" />
      
      <!-- Detailed Gold Zari Border -->
      <rect x="595" y="357" width="245" height="40" fill="url(#goldShine)" />
      <text x="607" y="381" font-family="'Georgia', serif" font-size="12" font-weight="bold" fill="#FFFFFF">✨ EMBOSSED FLORAL ZARI</text>
    </g>

    <text x="595" y="420" font-family="sans-serif" font-size="15" font-weight="bold" fill="#FFFFFF">Emerald Green Soft Silk</text>
    <text x="595" y="440" font-family="sans-serif" font-size="12" fill="#34D399">Traditional Temple Border</text>
    
    <text x="595" y="475" font-family="sans-serif" font-size="22" font-weight="extrabold" fill="#F59E0B">₹12,999</text>
    <text x="700" y="475" font-family="sans-serif" font-size="13" fill="#94A3B8" text-decoration="line-through">₹16,500</text>

    <text x="595" y="505" font-family="sans-serif" font-size="11" fill="#CBD5E1">Govt Silk Mark Certified</text>
    
    <rect x="595" y="525" width="245" height="40" rx="8" fill="url(#goldShine)" />
    <text x="670" y="550" font-family="sans-serif" font-size="13" font-weight="bold" fill="#000000">ADD TO CART</text>

    <rect x="595" y="578" width="245" height="34" rx="6" fill="#0F172A" stroke="#34D399" stroke-width="1.5" />
    <text x="640" y="600" font-family="sans-serif" font-size="12" fill="#34D399" font-weight="600">📐 Dynamic Size Chart</text>


    <!-- PRODUCT CARD 3: Deep Royal Purple Saree -->
    <rect x="875" y="142" width="275" height="515" rx="12" fill="url(#cardBg)" stroke="#334155" stroke-width="1.5" />
    
    <!-- SAREE IMAGE AREA 3 -->
    <g>
      <rect x="890" y="157" width="245" height="240" rx="8" fill="url(#sareePurple)" />
      <!-- Silk folds texture lines -->
      <path d="M 890 185 Q 960 245 1020 185 T 1135 225 L 1135 397 L 890 397 Z" fill="url(#foldShadow)" />
      <path d="M 890 245 Q 970 315 1050 235 T 1135 285" stroke="#FDE047" stroke-width="1.5" fill="none" opacity="0.4" />
      
      <!-- Detailed Gold Zari Border -->
      <rect x="890" y="357" width="245" height="40" fill="url(#goldShine)" />
      <text x="902" y="381" font-family="'Georgia', serif" font-size="12" font-weight="bold" fill="#FFFFFF">👑 BRIDAL HEAVY BROCADE</text>
    </g>

    <text x="890" y="420" font-family="sans-serif" font-size="15" font-weight="bold" fill="#FFFFFF">Amethyst Purple Kanchi</text>
    <text x="890" y="440" font-family="sans-serif" font-size="12" fill="#C084FC">Heavy Silver &amp; Gold Zari</text>
    
    <text x="890" y="475" font-family="sans-serif" font-size="22" font-weight="extrabold" fill="#F59E0B">₹24,000</text>
    <text x="995" y="475" font-family="sans-serif" font-size="13" fill="#94A3B8" text-decoration="line-through">₹29,500</text>

    <text x="890" y="505" font-family="sans-serif" font-size="11" fill="#CBD5E1">Custom Draping &amp; Stitching</text>
    
    <rect x="890" y="525" width="245" height="40" rx="8" fill="url(#goldShine)" />
    <text x="965" y="550" font-family="sans-serif" font-size="13" font-weight="bold" fill="#000000">ADD TO CART</text>

    <rect x="890" y="578" width="245" height="34" rx="6" fill="#0F172A" stroke="#C084FC" stroke-width="1.5" />
    <text x="935" y="600" font-family="sans-serif" font-size="12" fill="#C084FC" font-weight="600">📐 Dynamic Size Chart</text>

  </svg>
  `;

  const outputPath = path.join(__dirname, '../public/images/industry-textiles.webp');
  await sharp(Buffer.from(svg))
    .webp({ quality: 95 })
    .toFile(outputPath);
  
  console.log('Successfully written highly detailed WebP to', outputPath);
}

createRealisticSilkSareeWebp().catch(console.error);
