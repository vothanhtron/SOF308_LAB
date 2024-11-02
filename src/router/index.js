import { createRouter, createWebHistory } from 'vue-router';
import Lab1Bai1 from './components/Bai1.vue';


const routes = [
    { path: '/lab1/b1', component: Lab1Bai1 },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
