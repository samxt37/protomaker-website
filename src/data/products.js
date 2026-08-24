// Product catalog — Protomaker real inventory with image slideshows
// Prices are in src/data/prices.js — edit that file to change prices.
import { PRICES } from './prices.js';
export const CATEGORIES = ['phone-accessories', 'keyrings', 'other-3d-products'];

export const CATEGORY_LABELS = {
  'phone-accessories': {
    en: 'Phone Accessories',
    fr: 'Accessoires téléphone',
    ar: 'إكسسوارات الهاتف',
  },
  keyrings: {
    en: 'Accessories & Personalized Keyrings',
    fr: 'Accessoires & porte-clés personnalisés',
    ar: 'إكسسوارات وسلاسل مفاتيح مخصصة',
  },
  'other-3d-products': {
    en: 'Other 3D Products',
    fr: 'Autres produits 3D',
    ar: 'منتجات ثلاثية الأبعاد أخرى',
  },
};

export const PRODUCTS = [
  {
    id: 'pc-stand',
    category: 'phone-accessories',
    images: [
      '/assets/images/products/pc-stand/stand4.png',
      '/assets/images/products/pc-stand/stand5.png',
      '/assets/images/products/pc-stand/stand6.png',
    ],
    price: PRICES['pc-stand'],
    badge: 'best',
    customizable: false,
    name: {
      en: 'PC Stand',
      fr: 'Support PC',
      ar: 'حامل كمبيوتر',
    },
    desc: {
      en: 'Sturdy 3D-printed stand for desktop PCs and monitors.',
      fr: 'Support robuste imprimé en 3D pour PC de bureau et écrans.',
      ar: 'حامل متين مطبوع ثلاثي الأبعاد لأجهزة الكمبيوتر المكتبية والشاشات.',
    },
  },
  {
    id: 'phone-tablet-stand',
    category: 'phone-accessories',
    images: [
      '/assets/images/products/phone-tablet-stand/cover1.png',
      '/assets/images/products/phone-tablet-stand/cover2.png',
      '/assets/images/products/phone-tablet-stand/cover3.png',
    ],
    price: PRICES['phone-tablet-stand'],
    badge: null,
    customizable: false,
    name: {
      en: 'Phone & Tablet Stand',
      fr: 'Support téléphone & tablette',
      ar: 'حامل هاتف وجهاز لوحي',
    },
    desc: {
      en: 'Adjustable stand for phones and tablets — perfect for desk or bedside.',
      fr: 'Support réglable pour téléphones et tablettes — idéal bureau ou chevet.',
      ar: 'حامل قابل للتعديل للهواتف والأجهزة اللوحية — مثالي للمكتب أو بجانب السرير.',
    },
  },
  {
    id: 'camera-phone-pc-stand',
    category: 'phone-accessories',
    images: [
      '/assets/images/products/camera-stand/cam1.jpg',
      '/assets/images/products/camera-stand/cam2.jpg',
      '/assets/images/products/camera-stand/cam3.jpg',
    ],
    price: PRICES['camera-phone-pc-stand'],
    badge: 'new',
    customizable: false,
    name: {
      en: 'Camera, Phone & PC Stand',
      fr: 'Support caméra, téléphone & PC',
      ar: 'حامل كاميرا وهاتف وكمبيوتر',
    },
    desc: {
      en: 'Multi-device mount for cameras, phones and small PCs.',
      fr: 'Fixation multi-appareils pour caméras, téléphones et petits PC.',
      ar: 'حامل متعدد الأجهزة للكاميرات والهواتف وأجهزة الكمبيوتر الصغيرة.',
    },
  },
  {
    id: 'bag-tag',
    category: 'keyrings',
    images: [
      '/assets/images/products/bag-tag/ring2.png',
      '/assets/images/products/bag-tag/ring3.png',
      '/assets/images/products/bag-tag/ring4.png',
    ],
    price: PRICES['bag-tag'],
    badge: null,
    customizable: true,
    name: {
      en: 'Bag Tag',
      fr: 'Étiquette de sac',
      ar: 'بطاقة حقيبة',
    },
    desc: {
      en: 'Custom 3D-printed bag tag — add your name or text.',
      fr: 'Étiquette de sac imprimée en 3D — ajoutez votre prénom ou texte.',
      ar: 'بطاقة حقيبة مطبوعة ثلاثية الأبعاد — أضف اسمك أو نصك.',
    },
  },
  {
    id: 'personalized-keyring',
    category: 'keyrings',
    images: [
      '/assets/images/products/keyring-perso/p.webp',
      '/assets/images/products/keyring-perso/q.webp',
      '/assets/images/products/keyring-perso/o.webp',
      '/assets/images/products/keyring-perso/u.webp',
    ],
    price: PRICES['personalized-keyring'],
    badge: 'best',
    customizable: true,
    name: {
      en: 'Personalized Keyring',
      fr: 'Porte-clés personnalisé',
      ar: 'سلسلة مفاتيح مخصصة',
    },
    desc: {
      en: 'Your letter or name in 3D — pick your color and text (max 10 chars).',
      fr: 'Votre lettre ou prénom en 3D — choisissez couleur et texte (10 car. max).',
      ar: 'حرفك أو اسمك بتقنية ثلاثية الأبعاد — اختر اللون والنص (10 أحرف كحد أقصى).',
    },
  },
  {
    id: 'other-keyring-models',
    category: 'keyrings',
    images: [
      '/assets/images/products/keyring-other/12.webp',
      '/assets/images/products/keyring-other/14.webp',
      '/assets/images/products/keyring-other/15.webp',
      '/assets/images/products/keyring-other/e.webp',
      '/assets/images/products/keyring-other/13.webp',
    ],
    price: PRICES['other-keyring-models'],
    badge: null,
    customizable: true,
    name: {
      en: 'Other Keyring Models',
      fr: 'Autres modèles de porte-clés',
      ar: 'نماذج أخرى من سلاسل المفاتيح',
    },
    desc: {
      en: 'Unique 3D keyring shapes — numbers, letters and custom designs.',
      fr: 'Formes de porte-clés 3D uniques — chiffres, lettres et designs sur mesure.',
      ar: 'أشكال فريدة لسلاسل المفاتيح ثلاثية الأبعاد — أرقام وحروف وتصاميم مخصصة.',
    },
  },
  {
    id: 'magnetic-holders',
    category: 'other-3d-products',
    images: [
      '/assets/images/products/holders/manet1.jpg',
      '/assets/images/products/holders/manet2.jpg',
      '/assets/images/products/holders/manet.jpg',
    ],
    price: PRICES['magnetic-holders'],
    badge: 'new',
    customizable: false,
    name: {
      en: 'Magnetic Holders',
      fr: 'Supports magnétiques',
      ar: 'حوامل مغناطيسية',
    },
    desc: {
      en: '3D-printed magnetic holders for cables, tools and desk accessories.',
      fr: 'Supports magnétiques imprimés en 3D pour câbles, outils et accessoires de bureau.',
      ar: 'حوامل مغناطيسية مطبوعة ثلاثية الأبعاد للكابلات والأدوات وإكسسوارات المكتب.',
    },
  },
];
