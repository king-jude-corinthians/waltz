export interface Product {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  price: string;
  materials: string[];
  gradient: string;
  badge?: string;
  slug: string;
}

export interface Collection {
  id: string;
  name: string;
  tagline: string;
  description: string;
  itemCount: number;
  gradient: string;
  slug: string;
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  location: string;
  quote: string;
  rating: number;
}

export const collections: Collection[] = [
  {
    id: "col-001",
    name: "The Oba Collection",
    tagline: "Royalty Redefined",
    description:
      "Inspired by the regal grandeur of Yoruba royalty, each piece in this collection commands presence and exudes power.",
    itemCount: 8,
    gradient: "linear-gradient(135deg, #1a0533 0%, #3d1468 50%, #1a0533 100%)",
    slug: "oba-collection",
  },
  {
    id: "col-002",
    name: "The Harmattan Series",
    tagline: "Earth & Elegance",
    description:
      "Drawing from the warm, dusty palette of the Nigerian harmattan season — rich earth tones woven into immaculate native silhouettes.",
    itemCount: 10,
    gradient: "linear-gradient(135deg, #2d1a00 0%, #6b3d00 50%, #2d1a00 100%)",
    slug: "harmattan-series",
  },
  {
    id: "col-003",
    name: "The Lagos Noir",
    tagline: "Modern. Dark. Deliberate.",
    description:
      "A contemporary take on Nigerian fashion for the Lagos elite — dark tones, sharp tailoring, impeccable structure.",
    itemCount: 7,
    gradient: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)",
    slug: "lagos-noir",
  },
  {
    id: "col-004",
    name: "The Owambe Edit",
    tagline: "Celebration Without Compromise",
    description:
      "For those who believe the party is secondary to the entrance. Statement pieces built for Nigerian celebrations at their finest.",
    itemCount: 12,
    gradient: "linear-gradient(135deg, #0d2b1a 0%, #1a5c35 50%, #0d2b1a 100%)",
    slug: "owambe-edit",
  },
];

export const products: Product[] = [
  {
    id: "prd-001",
    name: "The Oba Agbada",
    slug: "oba-agbada",
    category: "Agbada",
    shortDescription: "Three-piece brocade agbada with hand-embroidered gold detailing",
    description:
      "A majestic three-piece agbada ensemble crafted from the finest imported brocade fabric. Each piece features intricate hand-embroidered gold motifs at the neckline, chest, and sleeve hem — a process requiring over 40 hours of skilled artisanship. The inner sokoto and buba are tailored for a precise fit, ensuring complete regal authority.",
    price: "₦480,000",
    materials: ["Premium Brocade", "Gold Embroidery Thread", "Italian Lining Fabric"],
    gradient: "linear-gradient(160deg, #1a0533 0%, #3d1468 40%, #6b2fa0 70%, #3d1468 100%)",
    badge: "Signature Piece",
  },
  {
    id: "prd-002",
    name: "The Senator II",
    slug: "senator-ii",
    category: "Senator Wear",
    shortDescription: "Tailored two-piece senator in oyster-white guinea brocade",
    description:
      "An immaculate two-piece senator ensemble cut from oyster-white guinea brocade. The structured damask top features a mandarin collar with subtle geometric embroidery. Paired with perfectly tailored trousers that fall at the exact point of elegance.",
    price: "₦185,000",
    materials: ["Guinea Brocade", "Embroidery Thread", "Premium Lining"],
    gradient: "linear-gradient(160deg, #1a1a0d 0%, #3d3a1a 40%, #6b621a 70%, #3d3a1a 100%)",
    badge: "Bestseller",
  },
  {
    id: "prd-003",
    name: "The Abuja Kaftan",
    slug: "abuja-kaftan",
    category: "Kaftan",
    shortDescription: "Floor-length kaftan in deep navy with silver thread embroidery",
    description:
      "A commanding floor-length kaftan crafted in deep navy damask. Silver-thread embroidery traces an intricate geometric pattern from the collar flowing to the hem — a nod to the architectural grandeur of Abuja. Finished with an internal belt for structure.",
    price: "₦220,000",
    materials: ["Navy Damask", "Silver Embroidery Thread", "Silk Lining"],
    gradient: "linear-gradient(160deg, #020d1a 0%, #0a2a4a 40%, #0d3d6b 70%, #0a2a4a 100%)",
  },
  {
    id: "prd-004",
    name: "The Isi-Agu Ensemble",
    slug: "isi-agu-ensemble",
    category: "Isi-Agu",
    shortDescription: "Traditional Igbo isi-agu fabric tailored into a commanding two-piece",
    description:
      "Honoring the rich Igbo tradition, this two-piece is cut from authentic isi-agu (lion's head) fabric. The fabric's bold leopard-print motif is balanced by restrained, surgical tailoring — creating a piece that is both culturally rich and undeniably luxurious.",
    price: "₦265,000",
    materials: ["Authentic Isi-Agu Fabric", "Red Coral Buttons", "Premium Lining"],
    gradient: "linear-gradient(160deg, #2d0000 0%, #6b0000 40%, #8b1a00 70%, #6b0000 100%)",
    badge: "Cultural Heritage",
  },
  {
    id: "prd-005",
    name: "The Emerald Agbada",
    slug: "emerald-agbada",
    category: "Agbada",
    shortDescription: "Rich emerald green three-piece with gold thread Yoruba embroidery",
    description:
      "Draped in the richness of deep emerald, this three-piece agbada ensemble is a visual feast. Elaborate Yoruba-inspired embroidery adorns the chest and flowing outer robe in rich gold thread, while the inner pieces maintain architectural precision.",
    price: "₦520,000",
    materials: ["Premium Damask", "Gold Thread Embroidery", "French Lace Lining"],
    gradient: "linear-gradient(160deg, #0a1f0a 0%, #1a4a1a 40%, #1a6b2a 70%, #1a4a1a 100%)",
    badge: "Limited Edition",
  },
  {
    id: "prd-006",
    name: "The Black Pearl Senator",
    slug: "black-pearl-senator",
    category: "Senator Wear",
    shortDescription: "All-black senator in imported Ankara with tonal embroidery",
    description:
      "The Lagos Noir in its purest form. An all-black senator ensemble in imported Ankara fabric, with tonal black-on-black embroidery at the chest and collar. Structured shoulder pads, a slim cut, and obsidian cufflinks complete this statement in darkness.",
    price: "₦195,000",
    materials: ["Imported Ankara", "Tonal Embroidery", "Black Obsidian Buttons"],
    gradient: "linear-gradient(160deg, #050505 0%, #0f0f0f 40%, #1a1a1a 70%, #0f0f0f 100%)",
  },
  {
    id: "prd-007",
    name: "The Burgundy Kaftan",
    slug: "burgundy-kaftan",
    category: "Kaftan",
    shortDescription: "Mid-length kaftan in wine-red guinea with intricate neckline work",
    description:
      "A sophisticated mid-length kaftan in deep wine-red guinea fabric. The round neckline features cascading embroidery that fans down the chest front — inspired by the intricate body art traditions of Northern Nigeria. Worn with matching trousers for a complete ensemble.",
    price: "₦240,000",
    materials: ["Wine Guinea Fabric", "Embroidery Thread", "Satin Lining"],
    gradient: "linear-gradient(160deg, #1a0010 0%, #4a0020 40%, #6b0033 70%, #4a0020 100%)",
  },
  {
    id: "prd-008",
    name: "The Aso-Oke Grand Set",
    slug: "aso-oke-grand-set",
    category: "Aso-Oke",
    shortDescription: "Complete aso-oke set woven in deep champagne gold and ivory",
    description:
      "A complete, handwoven aso-oke set in champagne gold and ivory, hand-crafted by master weavers in Iseyin, Oyo State. The set includes the traditional fila (cap), agbada outer robe, and sokoto — each thread bearing the history of Yoruba textile artistry.",
    price: "₦380,000",
    materials: ["Handwoven Aso-Oke", "Gold Metallic Thread", "Traditional Iseyin Weave"],
    gradient: "linear-gradient(160deg, #1a1500 0%, #3d3000 40%, #6b5500 70%, #3d3000 100%)",
    badge: "Handwoven",
  },
  {
    id: "prd-009",
    name: "The Coronation Agbada",
    slug: "coronation-agbada",
    category: "Agbada",
    shortDescription: "Museum-quality agbada built for chieftaincy ceremonies",
    description:
      "Reserved for the most momentous occasions — chieftaincy installations, royal ceremonies, and weddings of consequence. This masterpiece agbada requires 6–8 weeks of meticulous work, with over 200 hours of hand embroidery. Available by commission only.",
    price: "₦1,200,000",
    materials: ["Museum-Grade Swiss Damask", "24K Gold Thread", "Hand-Embroidered Panels", "Custom-Woven Aso-Oke"],
    gradient: "linear-gradient(160deg, #0d0500 0%, #2d1500 40%, #6b3d00 60%, #C9A84C 100%)",
    badge: "By Commission",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "tst-001",
    name: "Alhaji Musa Abdullahi",
    title: "Chairman, AMB Holdings",
    location: "Abuja, FCT",
    quote:
      "Waltz Signature crafted my son's wedding agbada and I have never seen a man look more like a king. The quality of embroidery is unlike anything I have seen in 40 years of wearing native. Truly world-class.",
    rating: 5,
  },
  {
    id: "tst-002",
    name: "Chief Emeka Okafor",
    title: "Traditional Ruler, Anambra State",
    location: "Onitsha, Anambra",
    quote:
      "For my chieftaincy installation, I needed something that would stand the weight of history. Waltz Signature delivered exactly that. The isi-agu ensemble they crafted remains the finest piece in my wardrobe.",
    rating: 5,
  },
  {
    id: "tst-003",
    name: "Engr. Tobi Adeyemi",
    title: "Managing Director, Adeyemi Group",
    location: "Victoria Island, Lagos",
    quote:
      "Every time I step into an owambe wearing a Waltz piece, I know I will be the most photographed man in the room. The attention to detail is extraordinary — worth every kobo.",
    rating: 5,
  },
  {
    id: "tst-004",
    name: "Dr. Yusuf Dankwabo",
    title: "Consultant, Lagos University Teaching Hospital",
    location: "Lagos Island, Lagos",
    quote:
      "I wear Waltz Signature pieces for every major occasion in my life. Three years, six pieces, zero disappointments. The consistency of quality is what sets them apart from everyone else.",
    rating: 5,
  },
];

export const categories = ["All", "Agbada", "Senator Wear", "Kaftan", "Isi-Agu", "Aso-Oke"];

export const galleryItems = [
  { id: 1, gradient: "linear-gradient(135deg, #1a0533 0%, #3d1468 100%)", aspect: "tall", label: "The Oba Series" },
  { id: 2, gradient: "linear-gradient(135deg, #2d1a00 0%, #6b3d00 100%)", aspect: "wide", label: "Harmattan Edit" },
  { id: 3, gradient: "linear-gradient(135deg, #020d1a 0%, #0d3d6b 100%)", aspect: "square", label: "Lagos Noir" },
  { id: 4, gradient: "linear-gradient(135deg, #0a1f0a 0%, #1a6b2a 100%)", aspect: "tall", label: "Emerald Series" },
  { id: 5, gradient: "linear-gradient(135deg, #1a0010 0%, #6b0033 100%)", aspect: "wide", label: "Owambe Edit" },
  { id: 6, gradient: "linear-gradient(135deg, #1a1500 0%, #6b5500 100%)", aspect: "square", label: "Aso-Oke Heritage" },
  { id: 7, gradient: "linear-gradient(135deg, #050505 0%, #1a1a1a 100%)", aspect: "tall", label: "Black Pearl" },
  { id: 8, gradient: "linear-gradient(135deg, #2d0000 0%, #8b1a00 100%)", aspect: "wide", label: "Isi-Agu Collection" },
  { id: 9, gradient: "linear-gradient(135deg, #0d0500 0%, #6b3d00 100%)", aspect: "square", label: "Coronation Series" },
];
