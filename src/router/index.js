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
      path: "/adminPage",
      name: "AdminPage",
      component: () => import("../pages/AdminPage.vue"),
    },
    {
        path: "/eruUnit",
        name: "EruUnit",
        component:() => import("../pages/EruUnit.vue")
    },
  ],
});

export default router;
