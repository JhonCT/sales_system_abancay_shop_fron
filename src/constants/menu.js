const data = [{
  id: "piaf",
  icon: "iconsminds-shop",
  label: "menu.piaf",
  to: "/app/piaf",
  subs: [{
    icon: "simple-icon-paper-plane",
    label: "menu.start",
    to: "/app/piaf/start"
  },
  ]
},
{
  id: "second-menu",
  icon: "iconsminds-chemical",
  label: "menu.second-menu",
  to: "/app/second-menu",
  subs: [{
    icon: "simple-icon-paper-plane",
    label: "menu.second",
    to: "/app/second-menu/second"
  },
  ]
},
{
  id: "pages",
  icon: "iconsminds-digital-drawing",
  label: "menu.pages",
  to: "/app/pages",
  subs: [{
    id: "pages-authorization",
    label: "menu.authorization",
    to: "/user",
    subs: [{
      icon: "simple-icon-user-following",
      label: "menu.login",
      to: "/user/login",
      newWindow: true
    }, {
      icon: "simple-icon-user-follow",
      label: "menu.register",
      to: "/user/register",
      newWindow: true
    }, {
      icon: "simple-icon-user-unfollow",
      label: "menu.forgot-password",
      to: "/user/forgot-password",
      newWindow: true
    },
    {
      icon: "simple-icon-user-following",
      label: "menu.reset-password",
      to: "/user/reset-password",
      newWindow: true
    }
    ],
  },
  {
    id: "pages-product",
    label: "menu.product",
    to: "/app/pages/product",
    subs: [{
      icon: "simple-icon-credit-card",
      label: "menu.data-list",
      to: "/app/pages/product/data-list"
    },
    {
      icon: "simple-icon-list",
      label: "menu.thumb-list",
      to: "/app/pages/product/thumb-list"
    },
    {
      icon: "simple-icon-grid",
      label: "menu.image-list",
      to: "/app/pages/product/image-list"
    },
    {
      icon: "simple-icon-picture",
      label: "menu.details",
      to: "/app/pages/product/details"
    },
    {
      icon: "simple-icon-book-open",
      label: "menu.details-alt",
      to: "/app/pages/product/details-alt"
    },
    ]
  },
  ]
},
{
  id: "single",
  icon: "iconsminds-three-arrow-fork",
  label: "menu.single",
  to: "/app/single"
},
{
  id: "docs",
  icon: "iconsminds-library",
  label: "menu.docs",
  to: "https://piaf-vue-docs.coloredstrategies.com/",
  newWindow: true
}
];
export default data;
