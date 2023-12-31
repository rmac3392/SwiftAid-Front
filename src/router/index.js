import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: "/",
            name: "Login",
            component:() => import("../pages/LoginPage.vue")
        },
        {
            path: "/operatorDashboard",
            name: "OperatorDashboard",
            component:() => import("../pages/OperatorPage.vue")
        },
    ]
});

export default router;
    
