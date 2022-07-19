import {createRouter, createWebHistory} from 'vue-router';
import MainPage from '@/components/pages/main-page.vue';
import PastePage from '@/components/pages/paste-page.vue';

const routes = [
    {
        path: '/',
        name: 'main',
        component: MainPage,
    },
    {
        path: '/pastes/:hash?',
        name: 'paste',
        component: PastePage,
        props: true,
    },
];

export default createRouter({
    routes: routes,
    history: createWebHistory(),
});
