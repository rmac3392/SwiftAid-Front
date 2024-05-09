import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: "/",
            name: "Login",
            component: () =>
                import ("../pages/LoginPage.vue"),
        },
        // {
        //     path: "/operatorPage",
        //     name: "OperatorPage",
        //     component: () =>
        //         import ("../pages/OperatorPage.vue"),
        // },
        {
            path: "/administratorPage",
            name: "AdministratorPage",
            component: () =>
                import ("../pages/AdministratorPage.vue"),
        },
        {
            path: "/responderPage",
            name: "responderPage",
            component: () =>
                import ("../pages/ResponderUnitPage.vue"),
        },

        {
            path: "/forgotPasswordPage",
            name: "forgotPasswordPage",
            component: () =>
                import ("../pages/ForgotPassword.vue"),
        },
        {
            path: "/operatorPage",
            name: "testPage",
            component: () =>
                import ("../pages/TestPage.vue"),
        },
        {
            path: "/post",
            name: "post",
            component: () =>
                import ("../pages/Post.vue"),
        },
        {
            path: "/print",
            name: "print",
            component: () =>
                import ("../pages/Print.vue"),
        },
        {
            path: "/Twitter",
            name: "Twitter",
            component: () =>
                import ("../pages/Twitter.vue"),
        },
        {
            path: "/SearchMap",
            name: "SearchMap",
            component: () =>
                import ("../pages/SearchMap.vue"),
        },
    ],
});

export default router;