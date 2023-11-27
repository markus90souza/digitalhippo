import { ArrowDownToLine, CheckCircle, Leaf } from 'lucide-react'

export const perks = [
  {
    name: 'Titulo 1',
    icon: ArrowDownToLine,
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit Provident temporibus doloremque qui maxime volupta',
  },

  {
    name: 'Titulo 2',
    icon: CheckCircle,
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit Provident temporibus doloremque qui maxime volupta',
  },
  {
    name: 'Titulo 3',
    icon: Leaf,
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit Provident temporibus doloremque qui maxime volupta',
  },
]

export const PRODUCT_CATEGORIES = [
  {
    label: 'UI Kits',
    value: 'ui_kits' as const,
    featured: [
      {
        name: 'Editor picks',
        href: `/products?category=ui_kits`,
        imageSrc: '/nav/ui-kits/mixed.jpg',
      },
      {
        name: 'New Arrivals',
        href: '/products?category=ui_kits&sort=desc',
        imageSrc: '/nav/ui-kits/blue.jpg',
      },
      {
        name: 'Bestsellers',
        href: '/products?category=ui_kits',
        imageSrc: '/nav/ui-kits/purple.jpg',
      },
    ],
  },
  {
    label: 'Icons',
    value: 'icons' as const,
    featured: [
      {
        name: 'Favorite Icon Picks',
        href: `/products?category=icons`,
        imageSrc: '/nav/icons/picks.jpg',
      },
      {
        name: 'New Arrivals',
        href: '/products?category=icons&sort=desc',
        imageSrc: '/nav/icons/new.jpg',
      },
      {
        name: 'Bestselling Icons',
        href: '/products?category=icons',
        imageSrc: '/nav/icons/bestsellers.jpg',
      },
    ],
  },
]
