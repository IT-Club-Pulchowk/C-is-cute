import { createRouter, createWebHistory } from "vue-router";
import StatsAll from "../components/StatsAll.vue";
import Assignments from "../components/Assignments.vue";

const routes = [
  {
    path: "/:day",
    name: "Day",
    component: StatsAll,
  },
  {
    path: "/",
    name: "Home",
    component: StatsAll,
  },
  {
    path: "/assignments",
    name: "Assignments",
    component: Assignments,
  },

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
