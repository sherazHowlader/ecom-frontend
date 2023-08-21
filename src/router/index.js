import {createRouter, createWebHistory} from "vue-router";
import store from "../store/index.js";
import { useToast } from 'vue-toastification';
const toast = useToast();

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../components/pages/home-page.vue'),
    },
    {
        path: '/product/:slug',
        name: 'product-details',
        component: () => import('../components/pages/product-details.vue'),
    },
    {
        path: '/categorie/:slug',
        name: 'categories',
        component: () => import('../components/pages/product-list.vue'),
    },
    {
        path: '/cart',
        name: 'cart',
        component: () => import('../components/pages/cart.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../components/pages/login.vue'),
        meta: {hideForAuth: true}
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../components/pages/register.vue'),
        meta: {hideForAuth: true}
    },
    {
        path: '/checkout',
        name: 'checkout',
        component: () => import('../components/pages/checkout.vue'),
        meta: {requiresAuth: true}
    },
    {
        path: '/:catchAll(.*)',
        name: '404',
        component: () => import('../components/pages/404.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const isAuthenticated = store.getters['token/isAuthenticated'];
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    if (to.path === '/login' && isAuthenticated) {
        next('/')
        toast.warning('You are logged in', {
            position: 'bottom-right'
        });
        return;
    }

    if (requiresAuth && !isAuthenticated) {
        next('/login')
        return;
    }
    next();
});

export default router
