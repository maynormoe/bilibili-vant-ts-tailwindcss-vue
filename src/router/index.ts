import { createRouter,createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        component: () => import('@/views/Home.vue')
    },
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
    },
    {
        path: '/video/`${video.id}`',
        component: () => import('@/views/VideoPage.vue')
    }
]

const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes
});


export default router
