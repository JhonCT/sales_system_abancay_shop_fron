const ProductRoutes = {
  path: "app/pages",
  component: () => import("../Product"),
  redirect: "/app/pages/product",
  children: [
    {
      path: "product",
      component: () => import("../Product"),
      redirect: "/app/pages/product/data-list",
      children: [
        {
          path: "data-list",
          component: () => import("../Pages/DataList")
        },
        {
          path: "thumb-list",
          component: () => import("../Pages/ThumbList")
        },
        {
          path: "image-list",
          component: () => import("../Pages/ImageList")
        },
        {
          path: "details",
          component: () => import("../Pages/Details")
        },
        {
          path: "details-alt",
          component: () => import("../Pages/DetailsAlt")
        }
      ]
    },
  ]
}

export default ProductRoutes
