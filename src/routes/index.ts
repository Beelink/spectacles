// utils
import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/layouts/AppLayout/AppLayout.vue"),
    children: [
      {
        name: "home",
        path: "/",
        component: () => import("@/pages/HomePage/HomePage.vue"),
      },
      {
        name: "spectacles-men",
        path: "/collections/:collection",
        component: () => import("@/pages/GlassesPage/GlassesPage.vue"),
      },
      {
        path: "/:catchAll(.*)",
        component: () => import("@/pages/NotFoundPage/NotFoundPage.vue"),
      },
    ],
  },
];

export default routes;
