import Vue from "vue";
import VueRouter from "vue-router";

import AppRoutes from "./modules/App/Routes/app_routes";
import AuthenticationRoutes from "./core/Authentication/Routes/authentication_routes";

Vue.use(VueRouter);

const routes = [
  AppRoutes,
  AuthenticationRoutes,
  { path: '/error', component: () => import('./views/Error') },
  { path: '*', component: () => import('./views/Error') }
]

const router = new VueRouter({
  linkActiveClass: "active",
  routes,
  mode: "history"
});

export default router;
