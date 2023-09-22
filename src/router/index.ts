import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import MenuSettings from "../components/settings/MenuSettings.vue";
import PlacesSettings from "../components/settings/PlacesSettings.vue";

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: "/",
  //   redirect: "/login",
  // },
  {
    path: "/login",
    name: "LoginView",
    component: LoginView,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/settings",
    name: "Settings",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SettingsView.vue"),
    children: [
      {
        path: "menu",
        component: MenuSettings,
      },
      {
        path: "places",
        component: PlacesSettings,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
