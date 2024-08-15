import { NavItemType } from '~/types'

// export const footerNavigation = ['Home', 'Services', 'Products', 'Team']

export const navigation: NavItemType[] = [
  {
    id: 'home',
    label: 'Home',
    route: '/',
  },
  {
    id: 'services',
    label: 'Services',
    route: '/service',
    menuItems: [
      {
        id:'services-app-dev',
        label: 'App Development',
        route: '/service/app',
      },
      {
        id:'services-web-dev',
        label: 'Web Development',
        route: '/service/web',
      },
      {
        id:'services-digital-marketing',
        label: 'Digital marketing and Branding',
        route: '/service/digital-branding',
      },
      {
        id:'services-product-design',
        label: 'Product Design',
        route: '/service/product-design',
      },
    ],
  },
  {
    id: 'products',
    label: 'Products',
    route: '/product',
  },
  {
    id: 'team',
    label: 'Team',
    route: '/team',
  },
]