const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function createVibrantTextilesLandscapeWebp() {
  const width = 1200;
  const height = 700;

  const svg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Main Rich Vibrant Gradient Background (Deep Navy Sapphire) -->
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0F172A" />
        <stop offset="50%" stop-color="#1E1B4B" />
        <stop offset="100%" stop-color="#31103F" />
      </linearGradient>

      <!-- Store Browser Header Gradient -->
      <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#1E1B4B" />
        <stop offset="50%" stop-color="#312E81" />
        <stop offset="100%" stop-color="#4C1D95" />
      </linearGradient>
      
      <!-- Card Container Background -->
      <linearGradient id="cardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#1E293B" />
        <stop offset="100%" stop-color="#0F172A" />
      </linearGradient>

      <!-- Pure Gold Zari Gradient -->
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#F59E0B" />
        <stop offset="50%" stop-color="#FCD34D" />
        <stop offset="100%" stop-color="#D97706" />
      </linearGradient>

      <!-- Peacock Sapphire Gradient (Saree 1) -->
      <linearGradient id="peacockGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0284C7" />
        <stop offset="50%" stop-color="#0369A1" />
        <stop offset="100%" stop-color="#075985" />
      </linearGradient>

      <!-- Emerald Green Gradient (Saree 2) -->
      <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#059669" />
        <stop offset="50%" stop-color="#047857" />
        <stop offset="100%" stop-color="#064E3B" />
      </linearGradient>

      <!-- Royal Amethyst Violet Gradient (Saree 3) -->
      <linearGradient id="violetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#7C3AED" />
        <stop offset="50%" stop-color="#6D28D9" />
        <stop offset="100%" stop-color="#5B21B6" />
      </linearGradient>

      <!-- Magenta Accent Button -->
      <linearGradient id="magentaBtn" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#DB2777" />
        <stop offset="100%" stop-color="#9D174D" />
      </linearGradient>

      <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="10" stdDeviation="16" flood-color="#000000" flood-opacity="0.7"/>
      </filter>
    </defs>

    <!-- Outer Canvas Background -->
    <rect width="${width}" height="${height}" fill="url(#bgGrad)" />
    
    <!-- Ambient Glowing Orbs for Visual Flair -->
    <circle cx="200" cy="120" r="220" fill="#38BDF8" opacity="0.1" />
    <circle cx="1050" cy="580" r="240" fill="#A855F7" opacity="0.12" />

    <!-- Desktop Web Browser Window Frame -->
    <rect x="30" y="30" width="1140" height="640" rx="16" fill="#0B132B" stroke="#334155" stroke-width="2" filter="url(#shadow)" />

    <!-- Browser Title Bar -->
    <rect x="30" y="30" width="1140" height="46" rx="16" fill="#1E293B" />
    <rect x="30" y="66" width="1140" height="10" fill="#1E293B" />
    <!-- Window Action Dots -->
    <circle cx="60" cy="53" r="6" fill="#EF4444" />
    <circle cx="80" cy="53" r="6" fill="#F59E0B" />
    <circle cx="100" cy="53" r="6" fill="#10B981" />

    <!-- Address Bar -->
    <rect x="140" y="41" width="700" height="24" rx="12" fill="#0F172A" stroke="#475569" stroke-width="1" />
    <text x="160" y="57" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" fill="#38BDF8" font-weight="600">https://kanchipuram-silk-boutique.in/collections/pure-zari-pattu</text>

    <!-- Store Navigation Header -->
    <rect x="30" y="76" width="1140" height="58" fill="url(#headerGrad)" />
    <text x="60" y="112" font-family="'Georgia', serif" font-size="20" font-weight="bold" fill="url(#goldGrad)">👑 KANCHIPURAM SILK BOUTIQUE</text>
    
    <!-- Category Navigation Tabs -->
    <rect x="380" y="93" width="130" height="28" rx="14" fill="#3730A3" />
    <text x="395" y="112" font-family="sans-serif" font-size="12" font-weight="bold" fill="#FDE047">Kanchi Pattu</text>
    
    <text x="530" y="111" font-family="sans-serif" font-size="13" font-weight="500" fill="#E2E8F0">Bridal Sarees</text>
    <text x="640" y="111" font-family="sans-serif" font-size="13" font-weight="500" fill="#E2E8F0">Soft Silk &amp; Tissue</text>
    <text x="770" y="111" font-family="sans-serif" font-size="13" font-weight="500" fill="#E2E8F0">Garments &amp; Boutiques</text>

    <!-- Coupon Badge & Cart -->
    <rect x="910" y="90" width="140" height="30" rx="15" fill="url(#magentaBtn)" />
    <text x="925" y="110" font-family="sans-serif" font-size="11" font-weight="bold" fill="#FFFFFF">✨ SILK20 (-20% OFF)</text>
    
    <rect x="1060" y="90" width="90" height="30" rx="6" fill="url(#goldGrad)" />
    <text x="1075" y="110" font-family="sans-serif" font-size="12" font-weight="bold" fill="#000000">🛒 Cart (3)</text>

    <!-- Main Content Area -->
    <!-- Left Filter Panel -->
    <rect x="50" y="150" width="220" height="500" rx="10" fill="#1E293B" stroke="#334155" stroke-width="1" />
    
    <!-- Filter 1: Fabric Selection -->
    <text x="70" y="180" font-family="sans-serif" font-size="13" font-weight="bold" fill="#FBBF24">FABRIC TYPE</text>
    
    <rect x="70" y="195" width="14" height="14" rx="3" fill="#38BDF8" />
    <text x="92" y="207" font-family="sans-serif" font-size="12" fill="#FFFFFF" font-weight="600">Pure Kanchipuram (156)</text>
    
    <rect x="70" y="225" width="14" height="14" rx="3" fill="#0F172A" stroke="#475569" />
    <text x="92" y="237" font-family="sans-serif" font-size="12" fill="#CBD5E1">Soft Silk &amp; Pattu (94)</text>

    <rect x="70" y="255" width="14" height="14" rx="3" fill="#0F172A" stroke="#475569" />
    <text x="92" y="267" font-family="sans-serif" font-size="12" fill="#CBD5E1">Banarasi Brocade (62)</text>

    <!-- Filter 2: Vibrant Color Swatches -->
    <text x="70" y="310" font-family="sans-serif" font-size="13" font-weight="bold" fill="#FBBF24">SILK COLOR SHADES</text>
    <circle cx="82" cy="335" r="12" fill="#0284C7" stroke="#FFFFFF" stroke-width="2" />
    <circle cx="114" cy="335" r="12" fill="#059669" />
    <circle cx="146" cy="335" r="12" fill="#7C3AED" />
    <circle cx="178" cy="335" r="12" fill="#D97706" />
    <circle cx="210" cy="335" r="12" fill="#DB2777" />

    <!-- Feature 3: Interactive Virtual Draping -->
    <text x="70" y="380" font-family="sans-serif" font-size="13" font-weight="bold" fill="#FBBF24">3D SAREE DRAPING</text>
    <rect x="70" y="395" width="180" height="38" rx="8" fill="#312E81" stroke="#818CF8" stroke-width="1.5" />
    <text x="83" y="419" font-family="sans-serif" font-size="12" fill="#FDE047" font-weight="bold">👗 Live Draping Preview</text>

    <!-- Feature 4: Delivery & Silk Mark -->
    <text x="70" y="465" font-family="sans-serif" font-size="13" font-weight="bold" fill="#FBBF24">PAN-INDIA SHIPPING</text>
    <text x="70" y="488" font-family="sans-serif" font-size="11" fill="#34D399" font-weight="600">🚚 Free Express Delivery</text>
    <text x="70" y="506" font-family="sans-serif" font-size="11" fill="#94A3B8">Tracking &amp; Easy Returns</text>

    <!-- Silk Mark Trust Badge -->
    <rect x="70" y="530" width="180" height="98" rx="8" fill="#0F172A" stroke="#334155" stroke-width="1" />
    <text x="82" y="555" font-family="sans-serif" font-size="12" font-weight="bold" fill="#FBBF24">GOVT SILK MARK</text>
    <text x="82" y="575" font-family="sans-serif" font-size="11" fill="#E2E8F0">100% Pure Mulberry Silk</text>
    <text x="82" y="593" font-family="sans-serif" font-size="11" fill="#E2E8F0">Authentic Handloom</text>
    <text x="82" y="615" font-family="sans-serif" font-size="12" font-weight="bold" fill="#10B981">✓ CERTIFIED STORE</text>

    <!-- SAREE PRODUCT CARDS GRID (Bright, Vibrant, Non-Red Primary Colors) -->
    
    <!-- CARD 1: Royal Peacock Blue Silk Saree -->
    <rect x="290" y="150" width="270" height="490" rx="12" fill="url(#cardGrad)" stroke="#334155" stroke-width="1.5" />
    <!-- Product Image Placeholder: Peacock Blue Silk with Gold Patterns -->
    <rect x="305" y="165" width="240" height="230" rx="8" fill="url(#peacockGrad)" />
    <!-- Gold Zari Pallu Motif overlay -->
    <rect x="305" y="355" width="240" height="40" fill="url(#goldGrad)" opacity="0.95" />
    <text x="315" y="380" font-family="'Georgia', serif" font-size="13" font-weight="bold" fill="#000000">👑 PURE GOLD ZARI PALLU</text>
    
    <!-- Details -->
    <text x="305" y="420" font-family="sans-serif" font-size="15" font-weight="bold" fill="#FFFFFF">Royal Peacock Silk Saree</text>
    <text x="305" y="440" font-family="sans-serif" font-size="12" fill="#38BDF8">Sapphire Blue &amp; Gold Brocade</text>
    
    <text x="305" y="472" font-family="sans-serif" font-size="22" font-weight="extrabold" fill="#F59E0B">₹18,500</text>
    <text x="410" y="472" font-family="sans-serif" font-size="13" fill="#94A3B8" text-decoration="line-through">₹23,000</text>
    
    <text x="305" y="502" font-family="sans-serif" font-size="11" fill="#CBD5E1">Includes Unstitched Blouse Piece</text>
    
    <!-- Action Buttons -->
    <rect x="305" y="518" width="240" height="38" rx="8" fill="url(#goldGrad)" />
    <text x="375" y="542" font-family="sans-serif" font-size="13" font-weight="bold" fill="#000000">ADD TO CART</text>

    <rect x="305" y="568" width="240" height="32" rx="6" fill="#0F172A" stroke="#38BDF8" stroke-width="1" />
    <text x="350" y="589" font-family="sans-serif" font-size="12" fill="#38BDF8" font-weight="600">📐 Dynamic Size Chart</text>

    <!-- CARD 2: Lush Emerald Green Pattu Saree -->
    <rect x="580" y="150" width="270" height="490" rx="12" fill="url(#cardGrad)" stroke="#334155" stroke-width="1.5" />
    <rect x="595" y="165" width="240" height="230" rx="8" fill="url(#emeraldGrad)" />
    <rect x="595" y="355" width="240" height="40" fill="url(#goldGrad)" opacity="0.95" />
    <text x="605" y="380" font-family="'Georgia', serif" font-size="13" font-weight="bold" fill="#000000">✨ EMBOSSED FLORAL ZARI</text>
    
    <text x="595" y="420" font-family="sans-serif" font-size="15" font-weight="bold" fill="#FFFFFF">Emerald Green Soft Silk</text>
    <text x="595" y="440" font-family="sans-serif" font-size="12" fill="#34D399">Traditional Temple Border</text>
    
    <text x="595" y="472" font-family="sans-serif" font-size="22" font-weight="extrabold" fill="#F59E0B">₹12,999</text>
    <text x="700" y="472" font-family="sans-serif" font-size="13" fill="#94A3B8" text-decoration="line-through">₹16,500</text>
    
    <text x="595" y="502" font-family="sans-serif" font-size="11" fill="#CBD5E1">Govt Silk Mark Verified</text>
    
    <rect x="595" y="518" width="240" height="38" rx="8" fill="url(#goldGrad)" />
    <text x="665" y="542" font-family="sans-serif" font-size="13" font-weight="bold" fill="#000000">ADD TO CART</text>

    <rect x="595" y="568" width="240" height="32" rx="6" fill="#0F172A" stroke="#34D399" stroke-width="1" />
    <text x="640" y="589" font-family="sans-serif" font-size="12" fill="#34D399" font-weight="600">📐 Dynamic Size Chart</text>

    <!-- CARD 3: Royal Amethyst Purple Bridal Saree -->
    <rect x="870" y="150" width="270" height="490" rx="12" fill="url(#cardGrad)" stroke="#334155" stroke-width="1.5" />
    <rect x="885" y="165" width="240" height="230" rx="8" fill="url(#violetGrad)" />
    <rect x="885" y="355" width="240" height="40" fill="url(#goldGrad)" opacity="0.95" />
    <text x="895" y="380" font-family="'Georgia', serif" font-size="13" font-weight="bold" fill="#000000">👑 BRIDAL HEAVY BROCADE</text>
    
    <text x="885" y="420" font-family="sans-serif" font-size="15" font-weight="bold" fill="#FFFFFF">Amethyst Purple Kanchi</text>
    <text x="885" y="440" font-family="sans-serif" font-size="12" fill="#C084FC">Heavy Silver &amp; Gold Zari</text>
    
    <text x="885" y="472" font-family="sans-serif" font-size="22" font-weight="extrabold" fill="#F59E0B">₹24,000</text>
    <text x="990" y="472" font-family="sans-serif" font-size="13" fill="#94A3B8" text-decoration="line-through">₹29,500</text>
    
    <text x="885" y="502" font-family="sans-serif" font-size="11" fill="#CBD5E1">Custom Stitching &amp; Draping</text>
    
    <rect x="885" y="518" width="240" height="38" rx="8" fill="url(#goldGrad)" />
    <text x="955" y="542" font-family="sans-serif" font-size="13" font-weight="bold" fill="#000000">ADD TO CART</text>

    <rect x="885" y="568" width="240" height="32" rx="6" fill="#0F172A" stroke="#C084FC" stroke-width="1" />
    <text x="930" y="589" font-family="sans-serif" font-size="12" fill="#C084FC" font-weight="600">📐 Dynamic Size Chart</text>

  </svg>
  `;

  const outputPath = path.join(__dirname, '../public/images/industry-textiles.webp');
  await sharp(Buffer.from(svg))
    .webp({ quality: 92 })
    .toFile(outputPath);
  
  console.log('Successfully generated vibrant non-red landscape industry-textiles.webp');
}

createVibrantTextilesLandscapeWebp().catch(console.error);
