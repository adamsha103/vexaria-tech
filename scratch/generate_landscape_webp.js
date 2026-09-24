const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function createTextilesLandscapeWebp() {
  const width = 1200;
  const height = 700;

  const svg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#2D0B1E" />
        <stop offset="50%" stop-color="#1A0613" />
        <stop offset="100%" stop-color="#0F030B" />
      </linearGradient>
      
      <linearGradient id="cardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#3D122A" />
        <stop offset="100%" stop-color="#240A18" />
      </linearGradient>

      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#F59E0B" />
        <stop offset="50%" stop-color="#FBBF24" />
        <stop offset="100%" stop-color="#D97706" />
      </linearGradient>

      <linearGradient id="magentaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#EC4899" />
        <stop offset="100%" stop-color="#BE185D" />
      </linearGradient>

      <linearGradient id="saree1Grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#991B1B" />
        <stop offset="50%" stop-color="#B91C1C" />
        <stop offset="100%" stop-color="#854D0E" />
      </linearGradient>

      <linearGradient id="saree2Grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1E3A8A" />
        <stop offset="50%" stop-color="#1D4ED8" />
        <stop offset="100%" stop-color="#B45309" />
      </linearGradient>

      <linearGradient id="saree3Grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#065F46" />
        <stop offset="50%" stop-color="#047857" />
        <stop offset="100%" stop-color="#D97706" />
      </linearGradient>

      <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.6"/>
      </filter>
    </defs>

    <!-- Background -->
    <rect width="${width}" height="${height}" fill="url(#bgGrad)" />
    
    <!-- Decorative Silk Zari Motifs -->
    <circle cx="150" cy="100" r="180" fill="#F59E0B" opacity="0.03" />
    <circle cx="1050" cy="600" r="220" fill="#EC4899" opacity="0.04" />

    <!-- Desktop Browser Frame -->
    <rect x="30" y="30" width="1140" height="640" rx="16" fill="#14060E" stroke="#501637" stroke-width="2" filter="url(#shadow)" />

    <!-- Browser Header Bar -->
    <rect x="30" y="30" width="1140" height="46" rx="16" fill="#260A1B" />
    <rect x="30" y="66" width="1140" height="10" fill="#260A1B" />
    <circle cx="60" cy="53" r="6" fill="#EF4444" />
    <circle cx="80" cy="53" r="6" fill="#F59E0B" />
    <circle cx="100" cy="53" r="6" fill="#10B981" />

    <!-- Address Bar -->
    <rect x="140" y="41" width="700" height="24" rx="12" fill="#3B112B" stroke="#651C4A" stroke-width="1" />
    <text x="160" y="57" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" fill="#F472B6" font-weight="500">https://kanchi-silk-showroom.in/catalog/pure-zari-sarees</text>

    <!-- Store Top Nav Header -->
    <rect x="30" y="76" width="1140" height="56" fill="#2A0B1E" stroke-bottom="#4A1435" />
    <text x="60" y="112" font-family="'Georgia', serif" font-size="20" font-weight="bold" fill="url(#goldGrad)">👑 KANCHI SILKS SHOWROOM</text>
    
    <!-- Nav Links -->
    <text x="380" y="110" font-family="sans-serif" font-size="13" font-weight="600" fill="#F59E0B">Kanchipuram Silk</text>
    <text x="510" y="110" font-family="sans-serif" font-size="13" fill="#E2E8F0">Bridal Collection</text>
    <text x="630" y="110" font-family="sans-serif" font-size="13" fill="#E2E8F0">Soft Silk &amp; Pattu</text>
    <text x="760" y="110" font-family="sans-serif" font-size="13" fill="#E2E8F0">Garments &amp; Kurtis</text>

    <!-- Search & Coupon Bar -->
    <rect x="910" y="90" width="140" height="30" rx="15" fill="url(#magentaGrad)" />
    <text x="925" y="110" font-family="sans-serif" font-size="11" font-weight="bold" fill="#FFFFFF">✨ KANCHI20 (-20%)</text>
    
    <rect x="1060" y="90" width="90" height="30" rx="6" fill="#F59E0B" />
    <text x="1075" y="110" font-family="sans-serif" font-size="12" font-weight="bold" fill="#000000">Cart (3)</text>

    <!-- Main Store Content Area -->
    <!-- Left Sidebar Filters -->
    <rect x="50" y="150" width="220" height="500" rx="10" fill="#220818" stroke="#4A1435" stroke-width="1" />
    <text x="70" y="180" font-family="sans-serif" font-size="14" font-weight="bold" fill="#FBBF24">FILTER BY FABRIC</text>
    
    <!-- Filter Options -->
    <rect x="70" y="195" width="14" height="14" rx="3" fill="#F59E0B" />
    <text x="92" y="207" font-family="sans-serif" font-size="12" fill="#FFFFFF" font-weight="500">Pure Kanchipuram (142)</text>
    
    <rect x="70" y="225" width="14" height="14" rx="3" fill="#3B112B" stroke="#651C4A" />
    <text x="92" y="237" font-family="sans-serif" font-size="12" fill="#CBD5E1">Soft Silk &amp; Tissue (88)</text>

    <rect x="70" y="255" width="14" height="14" rx="3" fill="#3B112B" stroke="#651C4A" />
    <text x="92" y="267" font-family="sans-serif" font-size="12" fill="#CBD5E1">Banarasi Zari (54)</text>

    <text x="70" y="310" font-family="sans-serif" font-size="14" font-weight="bold" fill="#FBBF24">COLOR &amp; OCCASION</text>
    <circle cx="80" cy="335" r="10" fill="#991B1B" stroke="#FFFFFF" stroke-width="2" />
    <circle cx="110" cy="335" r="10" fill="#1E3A8A" />
    <circle cx="140" cy="335" r="10" fill="#065F46" />
    <circle cx="170" cy="335" r="10" fill="#D97706" />
    <circle cx="200" cy="335" r="10" fill="#BE185D" />

    <text x="70" y="380" font-family="sans-serif" font-size="14" font-weight="bold" fill="#FBBF24">DRAPING PREVIEW</text>
    <rect x="70" y="395" width="180" height="36" rx="6" fill="#3D122A" stroke="#F59E0B" stroke-width="1" />
    <text x="85" y="418" font-family="sans-serif" font-size="12" fill="#FBBF24" font-weight="600">👗 3D Virtual Draping ON</text>

    <text x="70" y="465" font-family="sans-serif" font-size="14" font-weight="bold" fill="#FBBF24">SHIPPING</text>
    <text x="70" y="488" font-family="sans-serif" font-size="11" fill="#10B981" font-weight="600">🚚 Pan-India Free Express</text>
    <text x="70" y="506" font-family="sans-serif" font-size="11" fill="#94A3B8">Dispatch within 24 Hours</text>

    <rect x="70" y="530" width="180" height="100" rx="8" fill="#330D24" border="1" />
    <text x="82" y="555" font-family="sans-serif" font-size="12" font-weight="bold" fill="#FBBF24">GOVT SILK MARK</text>
    <text x="82" y="575" font-family="sans-serif" font-size="11" fill="#E2E8F0">100% Pure Mulberry Silk</text>
    <text x="82" y="593" font-family="sans-serif" font-size="11" fill="#E2E8F0">Certified Authenticity</text>
    <text x="82" y="615" font-family="sans-serif" font-size="12" font-weight="bold" fill="#10B981">✓ VERIFIED STORE</text>

    <!-- Saree Cards Grid -->
    <!-- Card 1: Royal Crimson Kanchi Silk -->
    <rect x="290" y="150" width="270" height="490" rx="12" fill="url(#cardGrad)" stroke="#5A193F" stroke-width="1.5" />
    <rect x="305" y="165" width="240" height="230" rx="8" fill="url(#saree1Grad)" />
    <!-- Zari border pattern line -->
    <rect x="305" y="365" width="240" height="30" fill="#D97706" opacity="0.9" />
    <text x="315" y="385" font-family="serif" font-size="13" font-weight="bold" fill="#FFFFFF">✨ PURE GOLD ZARI BORDER</text>
    
    <!-- Card Details -->
    <text x="305" y="420" font-family="sans-serif" font-size="15" font-weight="bold" fill="#FFFFFF">Kanchipuram Pure Silk Saree</text>
    <text x="305" y="440" font-family="sans-serif" font-size="12" fill="#F472B6">Crimson Red &amp; Gold Brocade</text>
    
    <text x="305" y="470" font-family="sans-serif" font-size="20" font-weight="extrabold" fill="#F59E0B">₹16,500</text>
    <text x="400" y="470" font-family="sans-serif" font-size="13" fill="#94A3B8" text-decoration="line-through">₹21,000</text>
    <rect x="475" y="454" width="65" height="22" rx="4" fill="#166534" />
    <text x="483" y="469" font-family="sans-serif" font-size="11" font-weight="bold" fill="#4ADE80">21% OFF</text>

    <text x="305" y="500" font-family="sans-serif" font-size="11" fill="#CBD5E1">Includes Blouse Piece | Silk Mark Certified</text>
    <rect x="305" y="515" width="240" height="38" rx="8" fill="url(#goldGrad)" />
    <text x="375" y="539" font-family="sans-serif" font-size="13" font-weight="bold" fill="#000000">ADD TO CART</text>

    <rect x="305" y="565" width="240" height="32" rx="6" fill="#3B112B" stroke="#651C4A" />
    <text x="355" y="586" font-family="sans-serif" font-size="12" fill="#FBBF24" font-weight="600">📐 View Size &amp; Draping</text>

    <!-- Card 2: Royal Blue Bridal Saree -->
    <rect x="580" y="150" width="270" height="490" rx="12" fill="url(#cardGrad)" stroke="#5A193F" stroke-width="1.5" />
    <rect x="595" y="165" width="240" height="230" rx="8" fill="url(#saree2Grad)" />
    <rect x="595" y="365" width="240" height="30" fill="#B45309" opacity="0.9" />
    <text x="605" y="385" font-family="serif" font-size="13" font-weight="bold" fill="#FFFFFF">👑 BRIDAL HEAVY PALLU</text>
    
    <text x="595" y="420" font-family="sans-serif" font-size="15" font-weight="bold" fill="#FFFFFF">Royal Blue Temple Silk Saree</text>
    <text x="595" y="440" font-family="sans-serif" font-size="12" fill="#F472B6">Mayil (Peacock) Motifs &amp; Zari</text>
    
    <text x="595" y="470" font-family="sans-serif" font-size="20" font-weight="extrabold" fill="#F59E0B">₹24,500</text>
    <text x="690" y="470" font-family="sans-serif" font-size="13" fill="#94A3B8" text-decoration="line-through">₹29,999</text>

    <text x="595" y="500" font-family="sans-serif" font-size="11" fill="#CBD5E1">Custom Stitching Available | Pan-India</text>
    <rect x="595" y="515" width="240" height="38" rx="8" fill="url(#goldGrad)" />
    <text x="665" y="539" font-family="sans-serif" font-size="13" font-weight="bold" fill="#000000">ADD TO CART</text>

    <rect x="595" y="565" width="240" height="32" rx="6" fill="#3B112B" stroke="#651C4A" />
    <text x="645" y="586" font-family="sans-serif" font-size="12" fill="#FBBF24" font-weight="600">📐 View Size &amp; Draping</text>

    <!-- Card 3: Emerald Soft Silk Saree -->
    <rect x="870" y="150" width="270" height="490" rx="12" fill="url(#cardGrad)" stroke="#5A193F" stroke-width="1.5" />
    <rect x="885" y="165" width="240" height="230" rx="8" fill="url(#saree3Grad)" />
    <rect x="885" y="365" width="240" height="30" fill="#D97706" opacity="0.9" />
    <text x="895" y="385" font-family="serif" font-size="13" font-weight="bold" fill="#FFFFFF">✨ SOFT LIGHTWEIGHT SILK</text>
    
    <text x="885" y="420" font-family="sans-serif" font-size="15" font-weight="bold" fill="#FFFFFF">Emerald Green Soft Pattu</text>
    <text x="885" y="440" font-family="sans-serif" font-size="12" fill="#F472B6">Contrast Magenta Zari Border</text>
    
    <text x="885" y="470" font-family="sans-serif" font-size="20" font-weight="extrabold" fill="#F59E0B">₹9,999</text>
    <text x="970" y="470" font-family="sans-serif" font-size="13" fill="#94A3B8" text-decoration="line-through">₹13,500</text>

    <text x="885" y="500" font-family="sans-serif" font-size="11" fill="#CBD5E1">Festive Special Offer | Coupon Applied</text>
    <rect x="885" y="515" width="240" height="38" rx="8" fill="url(#goldGrad)" />
    <text x="955" y="539" font-family="sans-serif" font-size="13" font-weight="bold" fill="#000000">ADD TO CART</text>

    <rect x="885" y="565" width="240" height="32" rx="6" fill="#3B112B" stroke="#651C4A" />
    <text x="935" y="586" font-family="sans-serif" font-size="12" fill="#FBBF24" font-weight="600">📐 View Size &amp; Draping</text>

  </svg>
  `;

  const outputPath = path.join(__dirname, '../public/images/industry-textiles.webp');
  await sharp(Buffer.from(svg))
    .webp({ quality: 90 })
    .toFile(outputPath);
  
  console.log('Successfully generated landscape industry-textiles.webp');
}

async function createElectronicsLandscapeWebp() {
  const width = 1200;
  const height = 700;

  const svg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0F172A" />
        <stop offset="50%" stop-color="#0B1120" />
        <stop offset="100%" stop-color="#020617" />
      </linearGradient>
      
      <linearGradient id="cardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#1E293B" />
        <stop offset="100%" stop-color="#0F172A" />
      </linearGradient>

      <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#06B6D4" />
        <stop offset="100%" stop-color="#3B82F6" />
      </linearGradient>

      <linearGradient id="phoneGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#38BDF8" />
        <stop offset="100%" stop-color="#1E40AF" />
      </linearGradient>

      <linearGradient id="phoneGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#A855F7" />
        <stop offset="100%" stop-color="#6B21A8" />
      </linearGradient>

      <linearGradient id="phoneGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#34D399" />
        <stop offset="100%" stop-color="#065F46" />
      </linearGradient>

      <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.6"/>
      </filter>
    </defs>

    <!-- Background -->
    <rect width="${width}" height="${height}" fill="url(#bgGrad)" />
    
    <!-- Glowing background accents -->
    <circle cx="200" cy="150" r="180" fill="#06B6D4" opacity="0.05" />
    <circle cx="1000" cy="550" r="220" fill="#3B82F6" opacity="0.05" />

    <!-- Desktop Browser Frame -->
    <rect x="30" y="30" width="1140" height="640" rx="16" fill="#0B1329" stroke="#1E293B" stroke-width="2" filter="url(#shadow)" />

    <!-- Browser Header Bar -->
    <rect x="30" y="30" width="1140" height="46" rx="16" fill="#1E293B" />
    <rect x="30" y="66" width="1140" height="10" fill="#1E293B" />
    <circle cx="60" cy="53" r="6" fill="#EF4444" />
    <circle cx="80" cy="53" r="6" fill="#F59E0B" />
    <circle cx="100" cy="53" r="6" fill="#10B981" />

    <!-- Address Bar -->
    <rect x="140" y="41" width="700" height="24" rx="12" fill="#0F172A" stroke="#334155" stroke-width="1" />
    <text x="160" y="57" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" fill="#38BDF8" font-weight="500">https://sri-electronics-mobiles.in/smartphones/no-cost-emi</text>

    <!-- Store Top Nav Header -->
    <rect x="30" y="76" width="1140" height="56" fill="#0F172A" stroke-bottom="#334155" />
    <text x="60" y="112" font-family="sans-serif" font-size="20" font-weight="extrabold" fill="url(#cyanGrad)">⚡ SRI ELECTRONICS &amp; MOBILES</text>
    
    <!-- Nav Links -->
    <text x="420" y="110" font-family="sans-serif" font-size="13" font-weight="600" fill="#38BDF8">5G Smartphones</text>
    <text x="550" y="110" font-family="sans-serif" font-size="13" fill="#E2E8F0">Smart TVs &amp; Audio</text>
    <text x="680" y="110" font-family="sans-serif" font-size="13" fill="#E2E8F0">Home Appliances</text>
    <text x="810" y="110" font-family="sans-serif" font-size="13" fill="#E2E8F0">No-Cost EMI Offers</text>

    <rect x="980" y="90" width="160" height="30" rx="6" fill="url(#cyanGrad)" />
    <text x="995" y="110" font-family="sans-serif" font-size="12" font-weight="bold" fill="#FFFFFF">💳 EMI Calculator</text>

    <!-- Main Store Content Area -->
    <!-- Left Sidebar Filters -->
    <rect x="50" y="150" width="220" height="500" rx="10" fill="#0F172A" stroke="#1E293B" stroke-width="1" />
    <text x="70" y="180" font-family="sans-serif" font-size="14" font-weight="bold" fill="#38BDF8">BRAND FILTERS</text>
    
    <rect x="70" y="195" width="14" height="14" rx="3" fill="#06B6D4" />
    <text x="92" y="207" font-family="sans-serif" font-size="12" fill="#FFFFFF" font-weight="500">Samsung 5G (48)</text>
    
    <rect x="70" y="225" width="14" height="14" rx="3" fill="#1E293B" stroke="#475569" />
    <text x="92" y="237" font-family="sans-serif" font-size="12" fill="#CBD5E1">Apple iPhone (32)</text>

    <rect x="70" y="255" width="14" height="14" rx="3" fill="#1E293B" stroke="#475569" />
    <text x="92" y="267" font-family="sans-serif" font-size="12" fill="#CBD5E1">OnePlus / Vivo (65)</text>

    <text x="70" y="310" font-family="sans-serif" font-size="14" font-weight="bold" fill="#38BDF8">EMI PLAN</text>
    <rect x="70" y="325" width="180" height="36" rx="6" fill="#1E293B" stroke="#06B6D4" stroke-width="1" />
    <text x="85" y="348" font-family="sans-serif" font-size="12" fill="#38BDF8" font-weight="600">⚡ 0% Interest (6/12 Mos)</text>

    <text x="70" y="395" font-family="sans-serif" font-size="14" font-weight="bold" fill="#38BDF8">WARRANTY</text>
    <text x="70" y="418" font-family="sans-serif" font-size="11" fill="#10B981" font-weight="600">🛡️ 1 Year Brand Warranty</text>
    <text x="70" y="436" font-family="sans-serif" font-size="11" fill="#94A3B8">+ 1 Year Store Care Protect</text>

    <text x="70" y="480" font-family="sans-serif" font-size="14" font-weight="bold" fill="#38BDF8">LOCAL PICKUP</text>
    <text x="70" y="503" font-family="sans-serif" font-size="11" fill="#F59E0B" font-weight="600">📍 Chennai / Kovai / Madurai</text>
    <text x="70" y="521" font-family="sans-serif" font-size="11" fill="#94A3B8">2-Hour Same Day Delivery</text>

    <rect x="70" y="545" width="180" height="85" rx="8" fill="#162032" />
    <text x="82" y="570" font-family="sans-serif" font-size="12" font-weight="bold" fill="#38BDF8">EXCHANGE OFFER</text>
    <text x="82" y="590" font-family="sans-serif" font-size="11" fill="#E2E8F0">Get up to ₹8,000 Off</text>
    <text x="82" y="610" font-family="sans-serif" font-size="11" fill="#10B981" font-weight="600">on Old Smartphone</text>

    <!-- Product Cards Grid -->
    <!-- Card 1: 5G Smartphone flagship -->
    <rect x="290" y="150" width="270" height="490" rx="12" fill="url(#cardGrad)" stroke="#334155" stroke-width="1.5" />
    <rect x="305" y="165" width="240" height="210" rx="8" fill="url(#phoneGrad1)" />
    <!-- Graphic Phone Silhouette -->
    <rect x="385" y="180" width="80" height="150" rx="12" fill="#000000" opacity="0.6" stroke="#38BDF8" stroke-width="2" />
    <circle cx="425" cy="195" r="4" fill="#38BDF8" />
    
    <text x="305" y="400" font-family="sans-serif" font-size="15" font-weight="bold" fill="#FFFFFF">Galaxy Pro 5G (256GB)</text>
    <text x="305" y="420" font-family="sans-serif" font-size="12" fill="#38BDF8">120Hz AMOLED | 50MP OIS</text>
    
    <text x="305" y="450" font-family="sans-serif" font-size="22" font-weight="extrabold" fill="#38BDF8">₹18,999</text>
    <text x="415" y="450" font-family="sans-serif" font-size="13" fill="#94A3B8" text-decoration="line-through">₹24,999</text>
    
    <rect x="305" y="468" width="240" height="26" rx="4" fill="#06283D" stroke="#06B6D4" stroke-width="1" />
    <text x="315" y="485" font-family="sans-serif" font-size="11" font-weight="bold" fill="#38BDF8">⚡ No-Cost EMI: ₹1,583 / month</text>

    <text x="305" y="514" font-family="sans-serif" font-size="11" fill="#10B981">✓ In Stock - Chennai Warehouse</text>
    
    <rect x="305" y="530" width="240" height="38" rx="8" fill="url(#cyanGrad)" />
    <text x="375" y="554" font-family="sans-serif" font-size="13" font-weight="bold" fill="#FFFFFF">BUY NOW WITH EMI</text>

    <rect x="305" y="580" width="240" height="32" rx="6" fill="#0F172A" stroke="#334155" />
    <text x="360" y="601" font-family="sans-serif" font-size="12" fill="#E2E8F0">⚖️ Compare Specs</text>

    <!-- Card 2: Ultra Smart TV / Tablet -->
    <rect x="580" y="150" width="270" height="490" rx="12" fill="url(#cardGrad)" stroke="#334155" stroke-width="1.5" />
    <rect x="595" y="165" width="240" height="210" rx="8" fill="url(#phoneGrad2)" />
    <!-- Graphic TV Silhouette -->
    <rect x="625" y="190" width="180" height="110" rx="6" fill="#000000" opacity="0.6" stroke="#A855F7" stroke-width="2" />
    <line x1="715" y1="300" x2="715" y2="320" stroke="#A855F7" stroke-width="3" />
    
    <text x="595" y="400" font-family="sans-serif" font-size="15" font-weight="bold" fill="#FFFFFF">Ultra HD 4K Smart TV 43"</text>
    <text x="595" y="420" font-family="sans-serif" font-size="12" fill="#C084FC">Dolby Vision | Android TV 12</text>
    
    <text x="595" y="450" font-family="sans-serif" font-size="22" font-weight="extrabold" fill="#38BDF8">₹24,999</text>
    <text x="705" y="450" font-family="sans-serif" font-size="13" fill="#94A3B8" text-decoration="line-through">₹32,000</text>
    
    <rect x="595" y="468" width="240" height="26" rx="4" fill="#2E1065" stroke="#A855F7" stroke-width="1" />
    <text x="605" y="485" font-family="sans-serif" font-size="11" font-weight="bold" fill="#E9D5FF">⚡ No-Cost EMI: ₹2,083 / month</text>

    <text x="595" y="514" font-family="sans-serif" font-size="11" fill="#10B981">✓ Free Wall Installation Included</text>
    
    <rect x="595" y="530" width="240" height="38" rx="8" fill="url(#cyanGrad)" />
    <text x="665" y="554" font-family="sans-serif" font-size="13" font-weight="bold" fill="#FFFFFF">BUY NOW WITH EMI</text>

    <rect x="595" y="580" width="240" height="32" rx="6" fill="#0F172A" stroke="#334155" />
    <text x="650" y="601" font-family="sans-serif" font-size="12" fill="#E2E8F0">⚖️ Compare Specs</text>

    <!-- Card 3: Wireless TWS Earbuds / Smartwatch -->
    <rect x="870" y="150" width="270" height="490" rx="12" fill="url(#cardGrad)" stroke="#334155" stroke-width="1.5" />
    <rect x="885" y="165" width="240" height="210" rx="8" fill="url(#phoneGrad3)" />
    <!-- Graphic Earbuds/Watch Silhouette -->
    <circle cx="1005" cy="255" r="50" fill="#000000" opacity="0.6" stroke="#34D399" stroke-width="2" />
    
    <text x="885" y="400" font-family="sans-serif" font-size="15" font-weight="bold" fill="#FFFFFF">Pro Wireless ANC Earbuds</text>
    <text x="885" y="420" font-family="sans-serif" font-size="12" fill="#34D399">Active Noise Cancellation | 40H</text>
    
    <text x="885" y="450" font-family="sans-serif" font-size="22" font-weight="extrabold" fill="#38BDF8">₹2,499</text>
    <text x="980" y="450" font-family="sans-serif" font-size="13" fill="#94A3B8" text-decoration="line-through">₹4,999</text>
    
    <rect x="885" y="468" width="240" height="26" rx="4" fill="#064E3B" stroke="#34D399" stroke-width="1" />
    <text x="895" y="485" font-family="sans-serif" font-size="11" font-weight="bold" fill="#A7F3D0">⚡ Instant Bank Cashback 10%</text>

    <text x="885" y="514" font-family="sans-serif" font-size="11" fill="#10B981">✓ Express Store Pickup Ready</text>
    
    <rect x="885" y="530" width="240" height="38" rx="8" fill="url(#cyanGrad)" />
    <text x="955" y="554" font-family="sans-serif" font-size="13" font-weight="bold" fill="#FFFFFF">BUY NOW</text>

    <rect x="885" y="580" width="240" height="32" rx="6" fill="#0F172A" stroke="#334155" />
    <text x="940" y="601" font-family="sans-serif" font-size="12" fill="#E2E8F0">⚖️ Compare Specs</text>

  </svg>
  `;

  const outputPath = path.join(__dirname, '../public/images/industry-electronics.webp');
  await sharp(Buffer.from(svg))
    .webp({ quality: 90 })
    .toFile(outputPath);
  
  console.log('Successfully generated landscape industry-electronics.webp');
}

async function run() {
  await createTextilesLandscapeWebp();
  await createElectronicsLandscapeWebp();
}

run().catch(console.error);
