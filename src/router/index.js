import { createRouter, createWebHistory } from 'vue-router';
 import Bai1 from '../components/Lab1/Bai1.vue';
 import Bai2 from '../components/Lab1/Bai2.vue';
 import Bai3 from '../components/Lab1/Bai3.vue';



// import About from '../components/About.vue';
// import Lab1 from '../components/lab1/b3.vue'
// import BlogPage from '../components/Blog.vue'

const routes = [

     { path: '/Lab1/b1', component: Bai1 },
     { path: '/Lab1/b2', component: Bai2 },
     { path: '/Lab1/b3', component: Bai3 },


    // { path: '/Lab1/b1', component: Lab1 },
    // { path: '/blog', component: BlogPage },
    // { path: '/about', component: About }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;