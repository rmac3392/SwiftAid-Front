import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Login",
      component: () => import("../pages/LoginPage.vue"),
    },
    {
      path: "/operatorPage",
      name: "OperatorPage",
      component: () => import("../pages/OperatorPage.vue"),
    },
    {
      path: "/administratorPage",
      name: "AdministratorPage",
      component: () => import("../pages/AdministratorPage.vue"),
    },
    {
      path: "/responderPage",
      name: "responderPage",
      component: () => import("../pages/ResponderUnitPage.vue"),
    },
  ],
});

export default router;
