import { createRouter, createWebHistory } from "vue-router";
import home from "@/views/landing/index.vue";
import ar from "@/views/ar/index.vue";
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
          meta: { navHideOnHero: true },
        },
        {
          path: "ar",
          name: "ar",
          component: ar,
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
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0 };
  },
});

export default router;
