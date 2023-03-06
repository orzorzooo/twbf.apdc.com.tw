import { createRouter, createWebHistory } from "vue-router";
import home from "@/views/landing/index.vue";
import layoutLanding from "@/layout/landing.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: layoutLanding,
      children: [
        {
          path: "",
          name: "home",
          component: home,
        },
        {
          path: "lgs",
          name: "lgs",
          component: () => import("@/views/lgs/index.vue"),
        },
        {
          path: "lgs/order",
          name: "lgsOrder",
          component: () => import("@/views/lgs/order.vue"),
        },
        {
          path: "lgs/order/:size/:model",
          name: "lgsOrderModel",
          component: () => import("@/views/lgs/orderModel.vue"),
        },
      ],
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
});

export default router;
