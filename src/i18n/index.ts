import type { ImageMetadata } from 'astro';
import KoGanTI from '../assets/KoGanTI.webp';
import Nirlawa from '../assets/Nirlawa.webp';
import Mahakunir from '../assets/Mahakunir.webp';
import GojamuEn from '../assets/Gojamu-En.webp';

export const locales = ['id', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'id';

export const localeLabels: Record<Locale, string> = { id: 'ID', en: 'EN' };
export const localeNames: Record<Locale, string> = { id: 'Bahasa Indonesia', en: 'English' };
export const ogLocales: Record<Locale, string> = { id: 'id_ID', en: 'en_US' };

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  tag: string;
  emoji: string;
  icon: string;
  image: ImageMetadata;
  cardClass: 'card-koganti' | 'card-nirlawa' | 'card-mahakunir';
  claim: string;
  benefits: string[];
  waMessage: string;
}

export interface Testimonial {
  text: string;
  name: string;
  location: string;
  avatarEmoji: string;
  avatarIcon: string;
  avatarClass: 'av-green' | 'av-blue' | 'av-pink';
  productBadge: string;
  badgeClass: 'badge-g' | 'badge-b' | 'badge-p';
}

const productMeta = {
  koganti: { image: KoGanTI, cardClass: 'card-koganti', emoji: '🍃', icon: 'leaf' },
  nirlawa: { image: Nirlawa, cardClass: 'card-nirlawa', emoji: '💙', icon: 'heart' },
  mahakunir: { image: Mahakunir, cardClass: 'card-mahakunir', emoji: '🌸', icon: 'flower' },
} as const;

export const translations = {
  id: {
    meta: {
      title: 'GoJamu – Herbal Alami untuk Hidup Sehat',
      description:
        'Produk jamu herbal GoJamu hadir dari bahan-bahan pilihan alam Nusantara — diformulasikan modern untuk kehidupan Anda yang lebih sehat setiap hari. 100% alami, HALAL, PIRT terdaftar.',
      image: '/og-image.webp',
      imageAlt: 'GoJamu - Herbal Alami untuk Hidup Sehat',
    },
    nav: {
      ctaLabel: 'Tanya Sekarang',
      waMessage: 'Halo GoJamu, saya mau tanya produk herbal Anda',
      languageLabel: 'Bahasa',
    },
    hero: {
      waMessage: 'Halo GoJamu, saya ingin tahu lebih lanjut tentang produk herbal Anda',
      badge: '100% Herbal Alami · Tanpa Bahan Kimia',
      titlePrefix: 'Tubuh Sehat Dimulai dari',
      titleEmphasis: 'Alam yang Terjaga',
      subtitle:
        'Produk jamu herbal GoJamu hadir dari bahan-bahan pilihan alam Nusantara — diformulasikan modern untuk kehidupan Anda yang lebih sehat setiap hari.',
      products: ['Ko Gan Ti – Anti Kanker', 'Nirlawa – Lambung Sehat', 'Mahakunir – Cantik Alami'],
      primaryCta: 'Chat WhatsApp Sekarang',
      secondaryCta: 'Lihat Produk ↓',
      trustItems: [
        { value: 'HALAL', label: 'Tersertifikasi' },
        { value: '100% Alami', label: 'Tanpa Pengawet' },
        { value: 'Teruji Klinis', label: 'PIRT Terdaftar' },
        { value: 'Kirim Cepat', label: 'Seluruh Indonesia' },
      ],
    },
    painPoints: {
      label: 'Apakah Anda Merasakannya?',
      titlePrefix: 'Tubuh Anda Butuh',
      titleEmphasis: 'Perhatian Lebih',
      description:
        'Gaya hidup modern membuat tubuh kita rentan terhadap berbagai gangguan kesehatan. GoJamu hadir sebagai solusi alami dari bumi Nusantara.',
      items: [
        { icon: 'tired', emoji: '😓', title: 'Mudah Lelah & Kurang Bertenaga', desc: 'Tubuh terasa berat, semangat menurun, produktivitas terganggu sejak pagi hari.' },
        { icon: 'nauseated', emoji: '🤢', title: 'Lambung Sering Tidak Nyaman', desc: 'Perut kembung, mual, atau nyeri lambung yang mengganggu aktivitas sehari-hari.' },
        { icon: 'sad', emoji: '😔', title: 'Kulit Kusam & Tidak Glowing', desc: 'Kulit terlihat lelah, tidak cerah, dan tidak memancarkan kecantikan alami Anda.' },
        { icon: 'shield', emoji: '🛡️', title: 'Imun Lemah, Mudah Sakit', desc: 'Daya tahan tubuh menurun, rentan terhadap virus dan bakteri di sekitar kita.' },
      ],
    },
    productCards: {
      label: 'Solusi Herbal Kami',
      titlePrefix: 'Pilih Produk',
      titleMiddle: 'yang Tepat untuk',
      titleEmphasis: 'Anda',
      description:
        'Setiap produk GoJamu diformulasikan khusus dari bahan herbal pilihan, tanpa pengawet buatan, aman dikonsumsi setiap hari.',
      newBadge: 'BARU!',
      ctaLabel: 'Tanya Harga via WA',
    },
    products: [
      {
        id: 'ko-gan-ti', name: 'Ko Gan Ti', subtitle: 'Teh Celup Balakacida — 10 Tea Bags', tag: 'Anti Kanker · Antioksidan', ...productMeta.koganti,
        claim: 'Perlindungan alami dari dalam, melawan radikal bebas dan sel kanker setiap hari.',
        benefits: ['Membantu melawan perkembangan sel kanker', 'Antioksidan tinggi dari Daun Balakacida pilihan', 'Meningkatkan sistem imun tubuh', 'Detoksifikasi racun dalam tubuh secara alami'],
        waMessage: 'Halo GoJamu, saya tertarik dengan Ko Gan Ti Teh Celup Balakacida. Boleh info harga dan cara order?',
      },
      {
        id: 'nirlawa', name: 'Nirlawa', subtitle: 'Kunir & Temulawak — 100g', tag: 'Kesehatan Lambung', ...productMeta.nirlawa,
        claim: 'Sehatkan lambungmu secara alami — solusi terpercaya untuk pencernaan optimal setiap hari.',
        benefits: ['Bantu jaga kesehatan dan fungsi lambung', 'Dukung daya tahan tubuh tetap optimal', '100% bahan alami tanpa pengawet buatan', 'Praktis, menyegarkan, aman untuk keluarga'],
        waMessage: 'Halo GoJamu, saya tertarik dengan Nirlawa Kunir & Temulawak. Boleh info harga dan cara order?',
      },
      {
        id: 'mahakunir', name: 'Mahakunir', subtitle: 'Original Kunir — 100g', tag: 'Kecantikan · Perempuan', ...productMeta.mahakunir,
        claim: 'Cantik alami dari dalam — kulit glowing, tubuh sehat, kepercayaan diri memancar setiap hari.',
        benefits: ['Kulit lebih sehat, cerah, dan glowing alami', 'Menjaga daya tahan tubuh tetap fit', 'Baik untuk kesehatan pencernaan', 'Bantu jaga berat badan ideal'],
        waMessage: 'Halo GoJamu, saya tertarik dengan Mahakunir Original Kunir. Boleh info harga dan cara order?',
      },
    ] satisfies Product[],
    benefits: {
      label: 'Mengapa GoJamu?', titlePrefix: 'Dibuat dengan', titleEmphasis: 'Standar Terbaik',
      description: 'Kami percaya bahwa kesehatan terbaik berasal dari alam yang dijaga dengan ilmu dan hati.',
      items: [
        { number: '01', title: 'Bahan Herbal 100% Pilihan', desc: 'Setiap bahan dipilih secara ketat dari sumber terpercaya di seluruh Nusantara, tanpa campuran bahan kimia berbahaya.' },
        { number: '02', title: 'Tersertifikasi HALAL & PIRT', desc: 'Proses produksi terstandar dan terdaftar resmi, sehingga aman untuk seluruh anggota keluarga Anda.' },
        { number: '03', title: 'Formulasi Ilmiah Modern', desc: 'Kearifan lokal herbal Nusantara dikombinasikan dengan teknologi pengolahan modern untuk hasil yang optimal.' },
        { number: '04', title: 'Aman Dikonsumsi Setiap Hari', desc: 'Tanpa pengawet buatan, tanpa efek samping berbahaya — cocok untuk konsumsi jangka panjang seluruh keluarga.' },
      ],
    },
    testimonialsSection: { label: 'Kata Mereka', titlePrefix: 'Ribuan Keluarga Sudah', titleEmphasis: 'Merasakannya' },
    testimonials: [
      { text: 'Sejak rutin minum Ko Gan Ti, tubuh saya terasa lebih segar dan jarang masuk angin. Rasanya juga enak seperti teh herbal premium.', name: 'Hendra', location: 'Surabaya', avatarEmoji: '👨‍💼', avatarIcon: 'person', avatarClass: 'av-green', productBadge: 'Ko Gan Ti', badgeClass: 'badge-g' },
      { text: 'Nirlawa membantu banget saat lambung saya sering perih. Sekarang lebih nyaman beraktivitas tanpa khawatir maag kambuh.', name: 'Ratna', location: 'Bandung', avatarEmoji: '👩', avatarIcon: 'person', avatarClass: 'av-blue', productBadge: 'Nirlawa', badgeClass: 'badge-b' },
      { text: 'Mahakunir jadi rutinitas pagi saya. Kulit terasa lebih cerah dan badan lebih ringan. Suka banget karena alami dan praktis.', name: 'Sari', location: 'Jakarta Selatan', avatarEmoji: '👩‍🦰', avatarIcon: 'person', avatarClass: 'av-pink', productBadge: 'Mahakunir', badgeClass: 'badge-p' },
    ] satisfies Testimonial[],
    cta: {
      waMessage: 'Halo GoJamu! Saya mau konsultasi produk herbal yang cocok untuk saya', eyebrow: 'Mulai Perjalanan Sehat Anda',
      titlePrefix: 'Siap Hidup Lebih Sehat', titleEmphasis: 'dengan Herbal Alami?',
      description: 'Konsultasikan kebutuhan kesehatan Anda secara gratis bersama tim GoJamu. Kami siap membantu Anda memilih produk yang paling tepat.',
      buttonLabel: 'Konsultasi GRATIS via WhatsApp', hint: 'Respon cepat · Tidak ada paksaan beli · Konsultasi ramah & personal',
    },
    faq: {
      label: 'Pertanyaan Umum', titlePrefix: 'Ada yang Ingin', titleEmphasis: 'Ditanyakan?',
      items: [
        { q: 'Apakah produk GoJamu aman dikonsumsi jangka panjang?', a: 'Ya, semua produk GoJamu dibuat dari bahan alami 100% tanpa pengawet buatan dan telah mendapatkan sertifikasi HALAL serta terdaftar di PIRT. Aman untuk dikonsumsi setiap hari dalam jangka panjang oleh seluruh keluarga.' },
        { q: 'Berapa lama efek produk mulai terasa?', a: 'Umumnya efek mulai terasa dalam 2–4 minggu konsumsi rutin. Namun hasilnya bisa berbeda tergantung kondisi tubuh masing-masing. Untuk hasil optimal, disarankan konsumsi secara konsisten setiap hari.' },
        { q: 'Apakah GoJamu bisa dikonsumsi bersamaan dengan obat dokter?', a: 'Secara umum aman, namun kami sangat menyarankan untuk berkonsultasi terlebih dahulu dengan dokter Anda, terutama jika sedang dalam pengobatan aktif. Tim kami juga siap membantu menjawab pertanyaan seputar ini via WhatsApp.' },
        { q: 'Bagaimana cara memesan dan metode pengiriman?', a: 'Pemesanan dilakukan via WhatsApp. Kami melayani pengiriman ke seluruh Indonesia dengan berbagai jasa ekspedisi. Chat kami sekarang untuk konfirmasi stok, harga, dan estimasi waktu pengiriman ke kota Anda.' },
        { q: 'Apakah ada garansi atau jaminan kepuasan?', a: 'GoJamu berkomitmen penuh terhadap kualitas produk. Jika Anda memiliki keluhan terkait produk yang diterima, hubungi kami via WhatsApp dan kami akan memberikan solusi terbaik untuk Anda.' },
      ],
    },
    footer: { tagline: 'Herbal Alami · Nusantara Sehat · Semua Kalangan', copyright: 'Semua Hak Dilindungi.' },
    stickyWA: { label: 'Chat WhatsApp', ariaLabel: 'Chat WhatsApp', waMessage: 'Halo GoJamu! Saya mau tanya tentang produk herbal Anda' },
  },
  en: {
    meta: {
      title: 'GoJamu – Natural Herbal Wellness for a Healthier Life',
      description: 'GoJamu herbal products are made from selected Indonesian botanicals and crafted with a modern formulation for everyday wellness. 100% natural, halal, and PIRT registered.',
      image: GojamuEn,
      imageAlt: 'GoJamu - Natural Herbal Wellness for a Healthier Life',
    },
    nav: { ctaLabel: 'Ask Now', waMessage: 'Hi GoJamu, I would like to ask about your herbal products', languageLabel: 'Language' },
    hero: {
      waMessage: 'Hi GoJamu, I would like to learn more about your herbal products', badge: '100% Natural Herbal · No Chemicals',
      titlePrefix: 'A Healthy Body Starts with', titleEmphasis: 'Nature Well Preserved',
      subtitle: 'GoJamu herbal products are made from selected Indonesian botanicals and crafted with a modern formulation to support your healthier everyday life.',
      products: ['Ko Gan Ti – Cancer Support', 'Nirlawa – Stomach Wellness', 'Mahakunir – Natural Beauty'],
      primaryCta: 'Chat on WhatsApp Now', secondaryCta: 'See Products ↓',
      trustItems: [
        { value: 'HALAL', label: 'Certified' }, { value: '100% Natural', label: 'No Preservatives' },
        { value: 'Clinically Tested', label: 'PIRT Registered' }, { value: 'Fast Delivery', label: 'Across Indonesia' },
      ],
    },
    painPoints: {
      label: 'Do You Feel This?', titlePrefix: 'Your Body Needs', titleEmphasis: 'More Care',
      description: 'Modern lifestyles make our bodies vulnerable to many wellness concerns. GoJamu offers a natural solution from Indonesia’s herbal heritage.',
      items: [
        { icon: 'tired', emoji: '😓', title: 'Easily Tired & Low on Energy', desc: 'Your body feels heavy, motivation drops, and productivity is disrupted from the morning.' },
        { icon: 'nauseated', emoji: '🤢', title: 'Frequent Stomach Discomfort', desc: 'Bloating, nausea, or stomach pain can interfere with your daily activities.' },
        { icon: 'sad', emoji: '😔', title: 'Dull, Less Radiant Skin', desc: 'Skin looks tired, less bright, and does not show your natural glow.' },
        { icon: 'shield', emoji: '🛡️', title: 'Weak Immunity, Getting Sick Easily', desc: 'Your immune system feels low and more vulnerable to viruses and bacteria around you.' },
      ],
    },
    productCards: {
      label: 'Our Herbal Solutions', titlePrefix: 'Choose the Product', titleMiddle: 'that Fits', titleEmphasis: 'You',
      description: 'Each GoJamu product is specially formulated from selected herbal ingredients, without artificial preservatives, and made for everyday use.',
      newBadge: 'NEW!', ctaLabel: 'Ask Price via WA',
    },
    products: [
      { id: 'ko-gan-ti', name: 'Ko Gan Ti', subtitle: 'Balakacida Tea Bags — 10 Tea Bags', tag: 'Cancer Support · Antioxidant', ...productMeta.koganti, claim: 'Natural protection from within, helping fight free radicals every day.', benefits: ['Helps support the body against abnormal cell development', 'Rich antioxidants from selected Balakacida leaves', 'Supports the immune system', 'Helps natural body detoxification'], waMessage: 'Hi GoJamu, I am interested in Ko Gan Ti Balakacida Tea Bags. May I know the price and how to order?' },
      { id: 'nirlawa', name: 'Nirlawa', subtitle: 'Turmeric & Temulawak — 100g', tag: 'Stomach Wellness', ...productMeta.nirlawa, claim: 'Support your stomach naturally — a trusted herbal companion for daily digestive wellness.', benefits: ['Helps maintain stomach comfort and function', 'Supports optimal immune resilience', '100% natural ingredients with no artificial preservatives', 'Practical, refreshing, and family-friendly'], waMessage: 'Hi GoJamu, I am interested in Nirlawa Turmeric & Temulawak. May I know the price and how to order?' },
      { id: 'mahakunir', name: 'Mahakunir', subtitle: 'Original Turmeric — 100g', tag: 'Beauty · Women', ...productMeta.mahakunir, claim: 'Natural beauty from within — radiant skin, a healthier body, and confidence that shines.', benefits: ['Helps skin feel healthier, brighter, and naturally radiant', 'Supports your body to stay fit', 'Good for digestive wellness', 'Helps maintain an ideal body weight'], waMessage: 'Hi GoJamu, I am interested in Mahakunir Original Turmeric. May I know the price and how to order?' },
    ] satisfies Product[],
    benefits: {
      label: 'Why GoJamu?', titlePrefix: 'Made with', titleEmphasis: 'Better Standards',
      description: 'We believe the best wellness comes from nature, cared for with knowledge and heart.',
      items: [
        { number: '01', title: '100% Selected Herbal Ingredients', desc: 'Every ingredient is carefully selected from trusted sources across Indonesia, without harmful chemical mixtures.' },
        { number: '02', title: 'HALAL & PIRT Certified', desc: 'Standardized and officially registered production makes it safer for the whole family.' },
        { number: '03', title: 'Modern Scientific Formulation', desc: 'Indonesia’s herbal wisdom is combined with modern processing technology for optimal results.' },
        { number: '04', title: 'Safe for Daily Use', desc: 'No artificial preservatives and no harmful side effects — suitable for long-term family wellness routines.' },
      ],
    },
    testimonialsSection: { label: 'What They Say', titlePrefix: 'Thousands of Families Have', titleEmphasis: 'Felt the Difference' },
    testimonials: [
      { text: 'Since drinking Ko Gan Ti regularly, my body feels fresher and I rarely catch a cold. It also tastes like premium herbal tea.', name: 'Hendra', location: 'Surabaya', avatarEmoji: '👨‍💼', avatarIcon: 'person', avatarClass: 'av-green', productBadge: 'Ko Gan Ti', badgeClass: 'badge-g' },
      { text: 'Nirlawa has helped so much when my stomach often felt sore. Now I can move more comfortably without worrying about stomach issues.', name: 'Ratna', location: 'Bandung', avatarEmoji: '👩', avatarIcon: 'person', avatarClass: 'av-blue', productBadge: 'Nirlawa', badgeClass: 'badge-b' },
      { text: 'Mahakunir is now part of my morning routine. My skin feels brighter and my body feels lighter. I love that it is natural and practical.', name: 'Sari', location: 'South Jakarta', avatarEmoji: '👩‍🦰', avatarIcon: 'person', avatarClass: 'av-pink', productBadge: 'Mahakunir', badgeClass: 'badge-p' },
    ] satisfies Testimonial[],
    cta: {
      waMessage: 'Hi GoJamu! I would like a consultation for the herbal product that fits my needs', eyebrow: 'Start Your Wellness Journey',
      titlePrefix: 'Ready to Live Healthier', titleEmphasis: 'with Natural Herbs?',
      description: 'Consult your wellness needs for free with the GoJamu team. We are ready to help you choose the product that fits you best.',
      buttonLabel: 'FREE Consultation via WhatsApp', hint: 'Fast response · No pressure to buy · Friendly, personal consultation',
    },
    faq: {
      label: 'FAQ', titlePrefix: 'Anything You Want', titleEmphasis: 'to Ask?',
      items: [
        { q: 'Are GoJamu products safe for long-term use?', a: 'Yes. GoJamu products are made from 100% natural ingredients without artificial preservatives, halal certified, and PIRT registered. They are designed for daily long-term use by the family.' },
        { q: 'How long does it take to feel the benefits?', a: 'Most people start noticing benefits within 2–4 weeks of regular use. Results may vary depending on each body condition. For optimal results, take it consistently every day.' },
        { q: 'Can GoJamu be consumed together with doctor-prescribed medicine?', a: 'In general it is safe, but we strongly recommend consulting your doctor first, especially if you are currently on active medication. Our team is also ready to help answer related questions via WhatsApp.' },
        { q: 'How do I order and how is shipping handled?', a: 'Orders are handled via WhatsApp. We ship across Indonesia using various courier services. Chat with us to confirm stock, price, and delivery estimates to your city.' },
        { q: 'Is there any guarantee or satisfaction support?', a: 'GoJamu is fully committed to product quality. If you have concerns about the product you receive, contact us via WhatsApp and we will provide the best possible solution.' },
      ],
    },
    footer: { tagline: 'Natural Herbs · Indonesian Wellness · For Everyone', copyright: 'All Rights Reserved.' },
    stickyWA: { label: 'Chat WhatsApp', ariaLabel: 'Chat on WhatsApp', waMessage: 'Hi GoJamu! I would like to ask about your herbal products' },
  },
} as const;

export function getTranslation(locale: Locale) {
  return translations[locale];
}

export function getLocalePath(locale: Locale) {
  return `/${locale}/`;
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'id' ? 'en' : 'id';
}

export function getAlternateLinks() {
  return locales.map((locale) => ({ locale, href: `https://gojamu.vercel.app/${locale}/` }));
}
