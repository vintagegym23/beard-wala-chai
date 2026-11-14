export type MenuCategoryId = 'chai' | 'coffee' | 'milkshake';
export type MenuCategory = 'all' | MenuCategoryId;

export interface MenuSection {
  id: MenuCategoryId;
  title: string;
  icon: string;
  items: string[];
}

// Add or remove items here; the menu page updates automatically.
export const MENU_SECTIONS: MenuSection[] = [
  {
    id: 'chai',
    title: 'Chai',
    icon: 'local_cafe',
    items: [
      'Kadak Chai',
      'Ginger Chai',
      'Elachi Chai',
      'Masala Chai',
      'Lemon Chai',
      'Kesar',
      'Kesar Elachi',
      'Paan',
      'Watermelon',
      'Mango',
      'Green Tea',
      'Black Tea',
      'Kulhad Chai',
      'Boost Chai',
      'Tulsi Chai',
      'Badam Chai',
      'Equality Chai',
    ],
  },
  {
    id: 'coffee',
    title: 'Coffee',
    icon: 'coffee',
    items: [
      'Regular Coffee',
      'Filter Coffee',
      'Vanilla Coffee',
      'Caramel Coffee',
      'Hazelnut Coffee',
      'Mint Coffee',
      'Cold Coffee',
      'Spl Cold Coffee',
    ],
  },
  {
    id: 'milkshake',
    title: 'Milkshake',
    icon: 'milkshake',
    items: ['CB Signature', 'Oreo KitKat', 'Mango', 'Strawberry', 'Banana Kiwi', 'Blackcurrant', 'Chocolate'],
  },
];

export const MENU_FILTER_TABS: { id: MenuCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  ...MENU_SECTIONS.map((s) => ({ id: s.id, label: s.title })),
];

export interface HomeSignatureItem {
  id: string;
  category: string;
  title: string;
  image: string;
  alt: string;
}

export const HOME_SIGNATURE_ITEMS: HomeSignatureItem[] = [
  {
    id: 'masala-chai',
    category: 'Chai',
    title: 'Masala Chai',
    image: '/images/menu/featured-masala-kadak.jpg',
    alt: 'Masala chai with a frothy top, with cinnamon, cardamom and ginger',
  },
  {
    id: 'kadak-chai',
    category: 'Chai',
    title: 'Kadak Chai',
    image: '/images/menu/featured-dum-irani.jpg',
    alt: 'Creamy chai in a fluted glass on a stone coaster',
  },
  {
    id: 'kesar-elachi',
    category: 'Chai',
    title: 'Kesar Elachi',
    image: '/images/menu/featured-badam-kesar.jpg',
    alt: 'Golden saffron chai in a glass cup and saucer with saffron threads and an almond',
  },
  {
    id: 'filter-coffee',
    category: 'Coffee',
    title: 'Filter Coffee',
    image: '/images/menu/featured-kaapi.jpg',
    alt: 'Frothy filter coffee in a ribbed glass',
  },
];
