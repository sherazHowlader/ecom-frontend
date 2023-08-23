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
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../components/pages/register.vue'),
    },
    {
        path: '/checkout',
        name: 'checkout',
        component: () => import('../components/pages/checkout.vue'),
        meta: {
            auth: true
        }
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
    const isAuthenticated = store.getters['token/hasToken'];
    const requiresAuth = to.matched.some(record => record.meta.auth);
    if (to.path === '/login' && isAuthenticated) {
        next('/')
        console.log('You are logged in')
        return;
    }

    if (requiresAuth && !isAuthenticated) {
        next('/login')
        return;
    }
    next();
});

export default router
