export interface PackagePlan {
  duration: string;
  price: number;
  isBestSeller?: boolean;
}

export interface PackageData {
  id: string;
  name: string;
  description: string;
  minPrice: number;
  image: string;
  plans: PackagePlan[];
}

export const WHATSAPP_NUMBER = "966597761902";

export const packages: PackageData[] = [
  {
    id: "strong-4k",
    name: "اشتراكات سترونق 4K",
    description: "أعلى دقة بث 4K حقيقية",
    minPrice: 100,
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663796914623/wpFwveItHIqfWwWS.jpg",
    plans: [
      { duration: "3 أشهر", price: 100 },
      { duration: "6 أشهر", price: 200, isBestSeller: true },
      { duration: "سنة", price: 300 },
    ],
  },
  {
    id: "everest",
    name: "سيرفر إيفرست",
    description: "الاشتراك الأفضل",
    minPrice: 80,
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663796914623/kcVGfPbexyjmiETF.jpg",
    plans: [
      { duration: "3 أشهر", price: 80 },
      { duration: "6 أشهر", price: 130, isBestSeller: true },
      { duration: "سنة", price: 190 },
    ],
  },
  {
    id: "hulk",
    name: "اشتراكات هولك",
    description: "الباقة العملاقة للأفلام والمباريات",
    minPrice: 100,
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663796914623/FfamaZDWplgpVpsc.jpg",
    plans: [
      { duration: "3 أشهر", price: 100 },
      { duration: "6 أشهر", price: 150, isBestSeller: true },
      { duration: "سنة", price: 250 },
    ],
  },
  {
    id: "falcon",
    name: "اشتراكات فالكون الأصلي",
    description: "الاشتراك العصري الغني عن التعريف",
    minPrice: 130,
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663796914623/SipLeUqgRlJMKRWO.jpg",
    plans: [
      { duration: "3 أشهر", price: 130 },
      { duration: "6 أشهر", price: 200, isBestSeller: true },
      { duration: "سنة", price: 300 },
    ],
  },
  {
    id: "vulture",
    name: "اشتراكات فولتشر",
    description: "الاشتراك الترفيهي المتميز",
    minPrice: 69,
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663796914623/QXUAYFCqyaEMEvup.jpg",
    plans: [
      { duration: "3 أشهر", price: 69 },
      { duration: "6 أشهر", price: 99, isBestSeller: true },
      { duration: "سنة", price: 149 },
    ],
  },
  {
    id: "universe",
    name: "Universe TV",
    description: "خدمة بث متميزة",
    minPrice: 100,
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663796914623/TXsoELoTqWKfRIAv.jpg",
    plans: [
      { duration: "3 أشهر", price: 100 },
      { duration: "6 أشهر", price: 150, isBestSeller: true },
      { duration: "سنة", price: 250 },
    ],
  },
  {
    id: "alfa",
    name: "Alfa TV",
    description: "تجربة بث احترافية",
    minPrice: 90,
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663796914623/oaLUWHrdhlAyKCBl.png",
    plans: [
      { duration: "3 أشهر", price: 90 },
      { duration: "6 أشهر", price: 130, isBestSeller: true },
      { duration: "سنة", price: 190 },
    ],
  },
];
