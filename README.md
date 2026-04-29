# 🌿 GoJamu Landing Page

Landing page modern untuk produk herbal GoJamu yang dibangun dengan [Astro](https://astro.build) dan di-deploy di [Vercel](https://vercel.com).

## ✨ Fitur

- 🚀 **Astro Framework** - Static site generation yang cepat dan ringan
- 🎨 **Component-based Architecture** - Setiap section sebagai reusable component
- 📱 **Responsive Design** - Mobile-first dengan CSS custom properties
- 🎭 **Scroll Animations** - IntersectionObserver-based reveal animations
- 🌐 **Cross-device Icons** - Emoji dengan SVG fallback untuk konsistensi
- 📊 **Data-driven** - Product & testimonial data terpisah di file data
- 🔄 **CI/CD Ready** - GitHub workflows untuk auto release & changelog
- ☁️ **Vercel Deployment** - Serverless deployment dengan Vercel adapter

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Astro](https://astro.build) | 4.x | Framework |
| [@astrojs/vercel](https://www.npmjs.com/package/@astrojs/vercel) | 7.x | Deployment adapter |
| TypeScript | Built-in | Type safety |

## 📁 Project Structure

```
gojamu/
├── .github/
│   └── workflows/
│       ├── release.yml      # Auto create release dari tag
│       └── changelog.yml    # Auto generate changelog
├── src/
│   ├── components/
│   │   ├── layout/          # Layout components
│   │   │   ├── Navbar.astro
│   │   │   ├── Footer.astro
│   │   │   └── StickyWA.astro
│   │   ├── sections/        # Page sections
│   │   │   ├── Hero.astro
│   │   │   ├── PainPoints.astro
│   │   │   ├── ProductCards.astro
│   │   │   ├── Keunggulan.astro
│   │   │   ├── Testimonials.astro
│   │   │   ├── CTA.astro
│   │   │   └── FAQ.astro
│   │   └── shared/          # Shared components
│   │       ├── Icon.astro   # Icon dengan SVG fallback
│   │       └── ScrollReveal.astro
│   ├── data/                # Data files
│   │   ├── products.ts
│   │   └── testimonials.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── styles/
│   │   └── global.css       # Global styles & CSS vars
│   └── pages/
│       └── index.astro      # Main page
├── public/                  # Static assets
├── astro.config.mjs         # Astro config
├── package.json
└── vercel.json             # Vercel config
```

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 9

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development

```bash
# Development server dengan hot reload
npm run dev

# Open browser
open http://localhost:4321
```

## 📦 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

Atau connect repository ke Vercel untuk auto-deploy dari branch `main`.

### GitHub Actions

Auto-release akan triggered saat:
- Push tag baru (e.g., `v1.0.0`)
- Manual trigger dari GitHub Actions tab

```bash
# Create and push tag
git tag v1.0.0
git push origin v1.0.0
```

## 🎨 Design System

### Color Palette

```css
--forest:  #1a3d2b    /* Hijau tua */
--herb:    #2d6a4f    /* Hijau medium */
--moss:    #52b788    /* Hijau segar */
--gold:    #c9a84c    /* Gold */
--sky:     #3a86c8    /* Biru */
--rose:    #e8a0b0    /* Pink */
--cream:   #fdf8f0    /* Krem */
```

### Typography

- **Headings**: Playfair Display (serif)
- **Body**: Lora (serif)
- **UI/Labels**: Inter (sans-serif)

## 📄 Sections

| Section | Component | Description |
|---|---|---|
| Navbar | `Navbar.astro` | Fixed navigation dengan scroll effect |
| Hero | `Hero.astro` | Hero section dengan animated bokeh |
| Pain Points | `PainPoints.astro` | Masalah kesehatan yang diatasi |
| Products | `ProductCards.astro` | 3 produk: Ko Gan Ti, Nirlawa, Mahakunir |
| Keunggulan | `Keunggulan.astro` | Keunggulan GoJamu |
| Testimonials | `Testimonials.astro` | Review pelanggan |
| CTA | `CTA.astro` | Call-to-action section |
| FAQ | `FAQ.astro` | Accordion FAQ |
| Footer | `Footer.astro` | Footer dengan branding |
| Sticky WA | `StickyWA.astro` | Floating WhatsApp button |

## 🔧 Configuration

### WhatsApp Integration

Update WhatsApp number di component masing-masing:

```astro
<!-- di Navbar.astro -->
<a href="https://wa.me/628XXXXXXXXXX" ...>

<!-- di Hero.astro -->
<a href="https://wa.me/628XXXXXXXXXX?text=..." ...>
```

### Product Data

Edit `src/data/products.ts` untuk mengubah produk:

```typescript
export const products: Product[] = [
  {
    id: 'ko-gan-ti',
    name: 'Ko Gan Ti',
    subtitle: 'Teh Celup Balakacida — 10 Tea Bags',
    tag: 'Anti Kanker · Antioksidan',
    // ...
  },
];
```

### Testimonial Data

Edit `src/data/testimonials.ts` untuk mengubah testimoni:

```typescript
export const testimonials: Testimonial[] = [
  {
    text: 'Review text here...',
    name: 'Customer Name',
    location: 'Location',
    // ...
  },
];
```

## 📝 License

© 2024 GoJamu. Semua Hak Dilindungi.

## 👤 Contact

WhatsApp: [Chat GoJamu](https://wa.me/628XXXXXXXXXX)

---

<div align="center">
  Dibuat dengan 🌿 dan Astro
</div>
