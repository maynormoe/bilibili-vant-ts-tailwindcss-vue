import { createRouter,createWebHistory } from "vue-router";

const routes = [
    {
        path: '/register',
        component: () => import('@/views/Register.vue')
    },
    {
        path: '/login',
        component: () => import('@/views/Login.vue')
    },
    {
        path: '/userinfo',
        component: () => import('@/views/UserInfo.vue')
    }
]

const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router
