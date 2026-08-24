// Trilingual site dictionary — EN / FR / AR (Protomaker v2)
export const translations = {
  en: {
    dir: 'ltr',
    metaTitle: 'Protomaker — Custom 3D-Printed Accessories',
    metaDescription:
      'PC stands, phone & tablet stands, personalized keyrings, bag tags and 3D-printed accessories. Fixed prices, printed on demand, ordered in one WhatsApp message.',
    nav: { products: 'Products', faq: 'FAQ', order: 'Order' },
    hero: {
      eyebrow: 'Custom 3D printing · made to order',
      titleA: 'PRINTED',
      titleB: 'FOR YOU',
      subtitle:
        'PC stands, phone & tablet stands, personalized keyrings and 3D accessories — printed on demand from $7.99, ordered in one WhatsApp message.',
      ctaPrimary: 'Order on WhatsApp',
      ctaSecondary: 'Browse products',
      note: 'PETG · dual-color · max 10 chars',
    },
    categories: {
      heading: 'Shop by category',
      sub: 'Three lines, fully customizable',
      viewAll: 'View all products',
      items: [
        { title: 'Phone Accessories', desc: 'PC, phone, tablet & camera stands' },
        { title: 'Accessories & Personalized Keyrings', desc: 'Bag tags, name keyrings & more' },
        { title: 'Other 3D Products', desc: 'Magnetic holders & custom prints' },
      ],
    },
    process: {
      heading: 'How it works',
      sub: 'From your idea to your hand',
      steps: [
        { title: 'Design', text: 'Tell us your name, text or idea on WhatsApp.' },
        { title: 'Print', text: 'We print in durable PETG, layer by layer.' },
        { title: 'Inspect', text: 'Every part is checked before it ships.' },
        { title: 'Ship', text: 'Fast delivery, ready to use or gift.' },
      ],
    },
    why: {
      heading: 'Why Protomaker',
      sub: 'Precision, durability, speed',
      items: [
        { title: 'Durable PETG', text: 'Tough, impact-resistant parts that last.' },
        { title: 'Precision print', text: 'High-detail dual-color finishes.' },
        { title: 'Fast on WhatsApp', text: 'Order, customize and confirm in one message.' },
      ],
    },
    products: {
      heading: 'Our products',
      sub: 'Fixed prices — customization is on you',
      filterAll: 'All',
      showing: 'Showing {count} products',
      sortFeatured: 'Featured',
      sortAz: 'Name A–Z',
      sortZa: 'Name Z–A',
      orderCta: 'Order on WhatsApp',
      badgeNew: 'NEW',
      badgeBest: 'BEST SELLER',
      empty: 'No products in this category yet.',
      customLabel: 'Your text (max 10)',
      customPlaceholder: 'e.g. SARAH',
    },
    faq: {
      heading: 'Questions?',
      sub: 'Straight from the workshop',
      items: [
        {
          q: 'How do I place an order?',
          a: 'Press any "Order on WhatsApp" button — a message with the product, price and your customization opens on WhatsApp. Send it and we confirm.',
        },
        {
          q: 'What material do you print with?',
          a: 'We print in PETG — durable, impact-resistant and available in many colors, including dual-color prints.',
        },
        {
          q: 'How does customization work?',
          a: 'Type your text (up to 10 characters) into the field on the product card. It is added to your WhatsApp order message automatically.',
        },
        {
          q: 'How long does production take?',
          a: 'Most orders are printed within 1–3 days, plus delivery time. We confirm the exact timing on WhatsApp.',
        },
        {
          q: 'Can I order in bulk?',
          a: 'Yes — for events, gifts or teams we offer bulk pricing. Message us on WhatsApp for a quote.',
        },
      ],
    },
    cta: {
      heading: 'Ready to print something yours?',
      text: 'Send us a message — we reply quickly and personally.',
      button: 'Start your order',
      phone: '+213 654259348',
    },
    footer: {
      tagline: 'Custom 3D-printed accessories, made to order.',
      linksHeading: 'Explore',
      contactHeading: 'Contact',
      waOrder: 'Order on WhatsApp',
      rights: '© {year} Protomaker. All rights reserved.',
      madeWith: 'Printed with precision',
    },
    wa: {
      order: (product, price, custom) =>
        `Order details: ${product} — ${price}${custom ? ` — Customization: ${custom}` : ''}`,
      general: "Hello Protomaker! I'd like to place an order.",
    },
  },

  fr: {
    dir: 'ltr',
    metaTitle: 'Protomaker — Accessoires personnalisés imprimés en 3D',
    metaDescription:
      'Supports PC, supports téléphone & tablette, porte-clés personnalisés, étiquettes de sac et accessoires imprimés en 3D. Prix fixes, sur commande, en un message WhatsApp.',
    nav: { products: 'Produits', faq: 'FAQ', order: 'Commander' },
    hero: {
      eyebrow: 'Impression 3D sur mesure · sur commande',
      titleA: 'IMPRIMÉ',
      titleB: 'POUR VOUS',
      subtitle:
        'Supports PC, téléphone & tablette, porte-clés personnalisés et accessoires 3D — imprimés à la demande dès 7,99 $, commandés en un message WhatsApp.',
      ctaPrimary: 'Commander sur WhatsApp',
      ctaSecondary: 'Voir les produits',
      note: 'PETG · bicolore · 10 caractères max',
    },
    categories: {
      heading: 'Acheter par catégorie',
      sub: 'Trois gammes, entièrement personnalisables',
      viewAll: 'Voir tous les produits',
      items: [
        { title: 'Accessoires téléphone', desc: 'Supports PC, téléphone, tablette & caméra' },
        { title: 'Accessoires & porte-clés personnalisés', desc: 'Étiquettes de sac, prénoms & plus' },
        { title: 'Autres produits 3D', desc: 'Supports magnétiques & impressions sur mesure' },
      ],
    },
    process: {
      heading: 'Comment ça marche',
      sub: 'De votre idée à votre main',
      steps: [
        { title: 'Concevez', text: 'Envoyez-nous votre prénom, texte ou idée sur WhatsApp.' },
        { title: 'Imprimons', text: 'Nous imprimons en PETG durable, couche par couche.' },
        { title: 'Inspectons', text: 'Chaque pièce est vérifiée avant expédition.' },
        { title: 'Expédions', text: 'Livraison rapide, prête à utiliser ou à offrir.' },
      ],
    },
    why: {
      heading: 'Pourquoi Protomaker',
      sub: 'Précision, durabilité, rapidité',
      items: [
        { title: 'PETG durable', text: 'Des pièces solides et résistantes aux chocs.' },
        { title: 'Impression précise', text: 'Finitions bicolores très détaillées.' },
        { title: 'Rapide sur WhatsApp', text: 'Commander, personnaliser et confirmer en un message.' },
      ],
    },
    products: {
      heading: 'Nos produits',
      sub: 'Prix fixes — la personnalisation, c’est vous',
      filterAll: 'Tous',
      showing: '{count} produits affichés',
      sortFeatured: 'En vedette',
      sortAz: 'Nom A–Z',
      sortZa: 'Nom Z–A',
      orderCta: 'Commander sur WhatsApp',
      badgeNew: 'NOUVEAU',
      badgeBest: 'BEST-SELLER',
      empty: 'Aucun produit dans cette catégorie pour le moment.',
      customLabel: 'Votre texte (10 max)',
      customPlaceholder: 'ex. SARAH',
    },
    faq: {
      heading: 'Des questions ?',
      sub: 'Directement depuis l’atelier',
      items: [
        {
          q: 'Comment passer une commande ?',
          a: 'Appuyez sur un bouton « Commander sur WhatsApp » — un message avec le produit, le prix et votre personnalisation s’ouvre sur WhatsApp. Envoyez-le et nous confirmons.',
        },
        {
          q: 'Quel matériau utilisez-vous ?',
          a: 'Nous imprimons en PETG — durable, résistant aux chocs, disponible en de nombreuses couleurs, y compris en bicolore.',
        },
        {
          q: 'Comment fonctionne la personnalisation ?',
          a: 'Saisissez votre texte (10 caractères max) dans le champ de la carte produit. Il est ajouté automatiquement à votre message de commande WhatsApp.',
        },
        {
          q: 'Combien de temps prend la production ?',
          a: 'La plupart des commandes sont imprimées en 1 à 3 jours, plus le délai de livraison. Nous confirmons le délai exact sur WhatsApp.',
        },
        {
          q: 'Puis-je commander en gros ?',
          a: 'Oui — pour les événements, cadeaux ou équipes, nous proposons des tarifs de gros. Écrivez-nous sur WhatsApp pour un devis.',
        },
      ],
    },
    cta: {
      heading: 'Prêt à imprimer quelque chose qui vous ressemble ?',
      text: 'Envoyez-nous un message — nous répondons vite et personnellement.',
      button: 'Commencer ma commande',
      phone: '+213 654259348',
    },
    footer: {
      tagline: 'Accessoires personnalisés imprimés en 3D, sur commande.',
      linksHeading: 'Explorer',
      contactHeading: 'Contact',
      waOrder: 'Commander sur WhatsApp',
      rights: '© {year} Protomaker. Tous droits réservés.',
      madeWith: 'Imprimé avec précision',
    },
    wa: {
      order: (product, price, custom) =>
        `Détails de la commande : ${product} — ${price}${custom ? ` — Personnalisation : ${custom}` : ''}`,
      general: "Bonjour Protomaker ! Je souhaite passer une commande.",
    },
  },

  ar: {
    dir: 'rtl',
    metaTitle: 'بروتوميكر — إكسسوارات مخصصة مطبوعة ثلاثية الأبعاد',
    metaDescription:
      'حوامل كمبيوتر وهاتف وجهاز لوحي، سلاسل مفاتيح مخصصة، بطاقات حقائب وإكسسوارات مطبوعة ثلاثية الأبعاد. أسعار ثابتة، تُطبع عند الطلب، تُطلب برسالة واتساب واحدة.',
    nav: { products: 'المنتجات', faq: 'الأسئلة', order: 'اطلب' },
    hero: {
      eyebrow: 'طباعة ثلاثية الأبعاد مخصصة · حسب الطلب',
      titleA: 'مُطبوع',
      titleB: 'من أجلك',
      subtitle:
        'حوامل كمبيوتر وهاتف وجهاز لوحي، سلاسل مفاتيح مخصصة وإكسسوارات ثلاثية الأبعاد — تُطبع عند الطلب بدءاً من 7.99$، تُطلب برسالة واتساب واحدة.',
      ctaPrimary: 'اطلب عبر واتساب',
      ctaSecondary: 'تصفح المنتجات',
      note: 'PETG · لونان · 10 أحرف كحد أقصى',
    },
    categories: {
      heading: 'تسوق حسب الفئة',
      sub: 'ثلاث مجموعات، تخصيص كامل',
      viewAll: 'عرض جميع المنتجات',
      items: [
        { title: 'إكسسوارات الهاتف', desc: 'حوامل كمبيوتر وهاتف وجهاز لوحي وكاميرا' },
        { title: 'إكسسوارات وسلاسل مفاتيح مخصصة', desc: 'بطاقات حقائب وأسماء والمزيد' },
        { title: 'منتجات ثلاثية الأبعاد أخرى', desc: 'حوامل مغناطيسية وطباعة مخصصة' },
      ],
    },
    process: {
      heading: 'كيف نعمل',
      sub: 'من فكرتك إلى يديك',
      steps: [
        { title: 'صمم', text: 'أخبرنا باسمك أو نصك أو فكرتك عبر واتساب.' },
        { title: 'نطبع', text: 'نطبع بمادة PETG المتينة، طبقة بعد طبقة.' },
        { title: 'نفحص', text: 'تُفحص كل قطعة قبل الشحن.' },
        { title: 'نشحن', text: 'توصيل سريع، جاهزة للاستخدام أو الإهداء.' },
      ],
    },
    why: {
      heading: 'لماذا بروتوميكر',
      sub: 'دقة ومتانة وسرعة',
      items: [
        { title: 'PETG متين', text: 'قطع قوية مقاومة للصدمات وتدوم.' },
        { title: 'طباعة دقيقة', text: 'تشطيبات ثنائية اللون عالية التفاصيل.' },
        { title: 'سريع عبر واتساب', text: 'اطلب وخصص وأكد في رسالة واحدة.' },
      ],
    },
    products: {
      heading: 'منتجاتنا',
      sub: 'أسعار ثابتة — التخصيص عليك',
      filterAll: 'الكل',
      showing: 'عرض {count} منتجات',
      sortFeatured: 'المميزة',
      sortAz: 'الاسم أ–ي',
      sortZa: 'الاسم ي–أ',
      orderCta: 'اطلب عبر واتساب',
      badgeNew: 'جديد',
      badgeBest: 'الأكثر مبيعاً',
      empty: 'لا توجد منتجات في هذه الفئة حالياً.',
      customLabel: 'نصك (10 أحرف)',
      customPlaceholder: 'مثال: سارة',
    },
    faq: {
      heading: 'لديك أسئلة؟',
      sub: 'مباشرة من الورشة',
      items: [
        {
          q: 'كيف أطلب؟',
          a: 'اضغط على أي زر «اطلب عبر واتساب» — ستفتح رسالة بالمنتج والسعر وتخصيصك على واتساب. أرسلها ونؤكد الطلب.',
        },
        {
          q: 'بأي مادة تطبعون؟',
          a: 'نطبع بمادة PETG — متينة ومقاومة للصدمات ومتوفرة بألوان عديدة، بما فيها الطباعة ثنائية اللون.',
        },
        {
          q: 'كيف يعمل التخصيص؟',
          a: 'اكتب نصك (حتى 10 أحرف) في الحقل على بطاقة المنتج. سيُضاف تلقائياً إلى رسالة طلبك على واتساب.',
        },
        {
          q: 'كم يستغرق الإنتاج؟',
          a: 'تتم طباعة معظم الطلبات خلال 1–3 أيام، بالإضافة إلى مدة الشحن. نؤكد الموعد الدقيق عبر واتساب.',
        },
        {
          q: 'هل يمكنني الطلب بالجملة؟',
          a: 'نعم — للمناسبات أو الهدايا أو الفرق نقدم أسعار الجملة. راسلنا على واتساب لعرض سعر.',
        },
      ],
    },
    cta: {
      heading: 'مستعد لطباعة شيء يخصك؟',
      text: 'أرسل لنا رسالة — نرد بسرعة وبشكل شخصي.',
      button: 'ابدأ طلبك',
      phone: '+213 654259348',
    },
    footer: {
      tagline: 'إكسسوارات مخصصة مطبوعة ثلاثية الأبعاد، حسب الطلب.',
      linksHeading: 'استكشف',
      contactHeading: 'تواصل',
      waOrder: 'اطلب عبر واتساب',
      rights: '© {year} بروتوميكر. جميع الحقوق محفوظة.',
      madeWith: 'مطبوع بدقة',
    },
    wa: {
      order: (product, price, custom) =>
        `تفاصيل الطلب: ${product} — ${price}${custom ? ` — التخصيص: ${custom}` : ''}`,
      general: 'مرحباً بروتوميكر! أود تقديم طلب.',
    },
  },
};

export const LANGS = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'ar', label: 'AR' },
];

export const WHATSAPP_NUMBER = '213654259348';
export const WHATSAPP_DISPLAY = '+213 654259348';
