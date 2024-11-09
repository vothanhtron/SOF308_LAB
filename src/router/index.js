import { createRouter, createWebHistory } from 'vue-router';
import Lab2Bai1 from "../components/Lab2/Bai1.vue";
import Lab2Bai2 from '../components/Lab2/Bai2.vue';
import Lab3Bai1 from '../components/Lab3/Bai1.vue';
import Lab3Bai2 from '../components/Lab3/Bai2.vue';
import Lab3Bai3 from '../components/Lab3/Bai3.vue';
import Lab3Bai4 from '../components/Lab3/Bai4.vue';

const routes = [
    { path: '/Lab2/Bai1', component: Lab2Bai1 },
    { path: '/Lab2/Bai2', component: Lab2Bai2 },
    { path: '/Lab3/Bai1', component: Lab3Bai1 },
    { path: '/Lab3/Bai2', component: Lab3Bai2 },
    { path: '/Lab3/Bai3', component: Lab3Bai3},
    { path: '/Lab3/Bai4', component: Lab3Bai4},


];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;