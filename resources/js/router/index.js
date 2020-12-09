import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Login from '@/views/Login/index.vue';

const routes = [
    {
        path: '',
        name: 'Login',
        component: Login,
    }
];

const router = new Router({
    routes
});

export default router;