export interface Product {
  id: string;
  name: string;
  subtitle: string;
  tag: string;
  emoji: string;
  icon: string;
  cardClass: 'card-koganti' | 'card-nirlawa' | 'card-mahakunir';
  claim: string;
  benefits: string[];
  waMessage: string;
}

export const products: Product[] = [
  {
    id: 'ko-gan-ti',
    name: 'Ko Gan Ti',
    subtitle: 'Teh Celup Balakacida — 10 Tea Bags',
    tag: 'Anti Kanker · Antioksidan',
    emoji: '🍃',
    icon: 'leaf',
    cardClass: 'card-koganti',
    claim: '"Perlindungan alami dari dalam, melawan radikal bebas dan sel kanker setiap hari."',
    benefits: [
      'Membantu melawan perkembangan sel kanker',
      'Antioksidan tinggi dari Daun Balakacida pilihan',
      'Meningkatkan sistem imun tubuh',
      'Detoksifikasi racun dalam tubuh secara alami',
    ],
    waMessage:
      'Halo GoJamu, saya tertarik dengan Ko Gan Ti Teh Celup Balakacida. Boleh info harga dan cara order?',
  },
  {
    id: 'nirlawa',
    name: 'Nirlawa',
    subtitle: 'Kunir & Temulawak — 100g',
    tag: 'Kesehatan Lambung',
    emoji: '💙',
    icon: 'heart',
    cardClass: 'card-nirlawa',
    claim: '"Sehatkan lambungmu secara alami — solusi terpercaya untuk pencernaan optimal setiap hari."',
    benefits: [
      'Bantu jaga kesehatan dan fungsi lambung',
      'Dukung daya tahan tubuh tetap optimal',
      '100% bahan alami tanpa pengawet buatan',
      'Praktis, menyegarkan, aman untuk keluarga',
    ],
    waMessage:
      'Halo GoJamu, saya tertarik dengan Nirlawa Kunir & Temulawak. Boleh info harga dan cara order?',
  },
  {
    id: 'mahakunir',
    name: 'Mahakunir',
    subtitle: 'Original Kunir — 100g',
    tag: 'Kecantikan · Perempuan',
    emoji: '🌸',
    icon: 'flower',
    cardClass: 'card-mahakunir',
    claim: '"Cantik alami dari dalam — kulit glowing, tubuh sehat, kepercayaan diri memancar setiap hari."',
    benefits: [
      'Kulit lebih sehat, cerah, dan glowing alami',
      'Menjaga daya tahan tubuh tetap fit',
      'Baik untuk kesehatan pencernaan',
      'Bantu jaga berat badan ideal',
    ],
    waMessage:
      'Halo GoJamu, saya tertarik dengan Mahakunir Original Kunir. Boleh info harga dan cara order?',
  },
];
