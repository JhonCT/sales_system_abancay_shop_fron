import AuthRequired from "@/utils/AuthRequired";
import ProductRoutes from "@/modules/Product/Routes/product_routes";

const AppRoutes = {
  path: '/',
  component: () => import('../App'),
  redirect: '/app/piaf',
  beforeEnter: AuthRequired,
  children: [
    {
      path: 'app/piaf',
      component: () => import('../Pages/'),
      redirect: '/app/piaf/start',
      children: [
        { path: 'start', component: () => import('../Pages/Start') }
      ]
    },
    {
      path: 'app/second-menu',
      component: () => import('../Pages/'),
      redirect: '/app/second-menu/second',
      children: [
        { path: 'second', component: () => import('../Pages/Second') }
      ]
    },
    {
      path: 'app/single',
      component: () => import('../Pages/Single')
    },
    ProductRoutes,
  ]
}

export default AppRoutes
