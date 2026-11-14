export const FRANCHISE_PRICE = '₹1,50,000/-';
export const FRANCHISE_PHONE_DISPLAY = '+91 9951991223';
export const FRANCHISE_PHONE_TEL = '+919951991223';
export const FRANCHISE_WHATSAPP = 'https://wa.me/919951991223';

export interface InventoryCategory {
  badge: string;
  icon: string;
  title: string;
  items: string[];
  spanTwo?: boolean;
}

export interface WhyChooseReason {
  icon: string;
  title: string;
  description: string;
}

export interface OnboardingStep {
  number: string;
  title: string;
  description: string;
  tag: string;
  highlight?: boolean;
}

export const WHY_CHOOSE_REASONS: WhyChooseReason[] = [
  {
    icon: 'payments',
    title: 'Affordable Franchise Investment',
    description: 'One special franchise package of ₹1,50,000/- to start your own tea business.',
  },
  {
    icon: 'kitchen',
    title: 'Complete Equipment Package',
    description: 'Branding equipment, kitchen equipment, furniture and starter raw materials included.',
  },
  {
    icon: 'school',
    title: 'Training & Guidance',
    description: 'Menu training and staff training so your counter serves the Beard Wala Chai way.',
  },
  {
    icon: 'campaign',
    title: 'Branding & Marketing Support',
    description: 'Branding support and marketing guidance to help your outlet get noticed.',
  },
  {
    icon: 'trending_up',
    title: 'Business Development Assistance',
    description: 'Business guidance from our team as you set up and run your tea business.',
  },
];

export const INVENTORY_CATEGORIES: InventoryCategory[] = [
  {
    badge: '01',
    icon: 'signpost',
    title: 'Branding Equipment',
    items: ['Name Board (10×3)', 'Stand Board (3×5)', 'Form Boards – 2', 'Menu Board – 1', 'Photo Frames – 6'],
  },
  {
    badge: '02',
    icon: 'kitchen',
    title: 'Kitchen Equipment',
    items: [
      '185-Litre Refrigerator',
      'Flask – 1',
      'Mixture Grinder – 1',
      'High-Pressure Gas Stove – 1',
      'Non-stick Bowls – 2',
      'Big Steel Tea Bowls – 2',
      'Lime Squeezer – 1',
      'Lighter – 1',
      'Small Tea Filters – 2',
      'Large Tea Filter – 1',
      'Ice Cream Scooper – 1',
      'Measurement Cups – 5',
    ],
  },
  {
    badge: '03',
    icon: 'deck',
    title: 'Furniture',
    items: ['Cash Counter with Snack Display – 1', 'Middle Wooden Partition – 1', 'Plastic Stools – 4', 'Tea Table – 1'],
  },
  {
    badge: '04',
    icon: 'grocery',
    title: 'Raw Materials & Ingredients',
    spanTwo: true,
    items: [
      'Tea Powder – 15 KG',
      'Green Tea – 200 GMS',
      'Bru Coffee – 24 Sachets',
      'Badam Powder – 500 GMS',
      'Pepper Masala – 200 GMS',
      'Masala Powder – 200 GMS',
      'Elachi Powder – 1 Packet',
      'Rose, Strawberry, Orange, Mango & Chocolate Syrups',
      'Blackcurrant, Fizi Mojito & Blue Curacao Syrups',
      'Horlicks, Bournvita & Boost',
      'Honey, KitKat & Continental Sachets',
      'Osmania Biscuits – 2 Packets',
      'Sonti Powder, Bellam Powder & Dates',
      'Pistachio, Cashew, Cranberry & Apricots',
      'Tea Cups – 5 Packets',
    ],
  },
  {
    badge: '05',
    icon: 'support_agent',
    title: 'Business Support',
    items: ['Menu Training', 'Business Guidance', 'Staff Training', 'Branding Support', 'Marketing Guidance'],
  },
];

export const ONBOARDING_STEPS: OnboardingStep[] = [
  {
    number: '01',
    title: 'Enquire',
    description: 'Call or WhatsApp our franchise team on +91 9951991223 to start the conversation.',
    tag: 'Talk to us',
  },
  {
    number: '02',
    title: 'Book Your Package',
    description: 'Confirm the Special Franchise Package of ₹1,50,000/- for your location.',
    tag: '₹1,50,000/-',
  },
  {
    number: '03',
    title: 'Equipment & Branding',
    description: 'Receive your branding equipment, kitchen equipment, furniture and raw materials.',
    tag: 'Complete package',
  },
  {
    number: '04',
    title: 'Menu & Staff Training',
    description: 'Our team trains you and your staff on the menu and day-to-day operations.',
    tag: 'Training',
  },
  {
    number: '05',
    title: 'Open Your Outlet',
    description: 'Launch with our branding support, marketing guidance and ongoing business guidance.',
    tag: 'Start serving',
    highlight: true,
  },
];

export const FOUNDER_NAME = 'Vadla Vishnumurthy';
export const FOUNDER_TITLE = 'Founder & CEO';
