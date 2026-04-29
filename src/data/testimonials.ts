export interface Testimonial {
  text: string;
  name: string;
  location: string;
  avatarEmoji: string;
  avatarClass: 'av-green' | 'av-blue' | 'av-pink';
  productBadge: string;
  badgeClass: 'badge-g' | 'badge-b' | 'badge-p';
}

export const testimonials: Testimonial[] = [
  {
    text: 'Sudah 3 bulan rutin minum Ko Gan Ti. Badan terasa lebih ringan, hasil cek kesehatan membaik. Terima kasih GoJamu, produk ini benar-benar membantu keluarga kami.',
    name: 'Bapak Hendra S.',
    location: 'Surabaya, Jawa Timur',
    avatarEmoji: '👨',
    avatarClass: 'av-green',
    productBadge: 'Ko Gan Ti',
    badgeClass: 'badge-g',
  },
  {
    text: 'Lambung saya sering bermasalah bertahun-tahun. Sejak pakai Nirlawa GoJamu, perut lebih nyaman, tidak kembung lagi. Rasanya pun enak, jadi semangat minum rutin.',
    name: 'Ibu Ratna W.',
    location: 'Bandung, Jawa Barat',
    avatarEmoji: '👩',
    avatarClass: 'av-blue',
    productBadge: 'Nirlawa',
    badgeClass: 'badge-b',
  },
  {
    text: 'Kulit saya terasa lebih cerah dan glowing setelah sebulan minum Mahakunir. Alami, aman, tidak ada efek samping. Cocok banget buat wanita yang ingin cantik dari dalam!',
    name: 'Sari Dewi A.',
    location: 'Jakarta Selatan',
    avatarEmoji: '👩',
    avatarClass: 'av-pink',
    productBadge: 'Mahakunir',
    badgeClass: 'badge-p',
  },
];
