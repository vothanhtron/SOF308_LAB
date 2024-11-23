import { createRouter, createWebHistory } from 'vue-router';
import Lab2Bai1 from "../components/Lab2/Bai1.vue";
import Lab2Bai2 from '../components/Lab2/Bai2.vue';
import Lab3Bai1 from '../components/Lab3/Bai1.vue';

import Lab3Bai2 from '../components/Lab3/Bai2.vue';
import Lab3Bai3 from '../components/Lab3/Bai3.vue';
import Lab3Bai4 from '../components/Lab3/Bai4.vue';

import Lab5Bai1 from '../components/Lab5/Bai1.vue';
import Lab5Bai2 from '../components/Lab5/Bai2.vue';
import Lab5Bai3 from '../components/Lab5/Bai3.vue';
import Lab5Bai4App from '../components/Lab5/App.vue';





import Lab6Bai1 from '../components/Lab6/Bai1.vue';
import Lab6Bai2 from '../components/Lab6/Bai2.vue';
import Lab6Bai4 from '../components/Lab6/Bai4.vue';


import LoginPage from '../components/ASM/Login.vue';
import SignUpPage from '../components/ASM/DangKy.vue'; 
import TrangChu from '../components/ASM/Pages/TrangChu.vue';
import BlogPage from '../components/ASM/Pages/BlogPage.vue';
import PostDetails from '../components/ASM/Pages/PostDetails.vue';
import ProfileUser from '../components/ASM/ProfileUser.vue';


const routes = [
    { path: '/Lab2/Bai1', component: Lab2Bai1 },
    { path: '/Lab2/Bai2', component: Lab2Bai2 },

    { path: '/Lab3/Bai1', component: Lab3Bai1 },
    { path: '/Lab3/Bai2', component: Lab3Bai2 },
    { path: '/Lab3/Bai3', component: Lab3Bai3 },
    { path: '/Lab3/Bai4', component: Lab3Bai4 },

    { path: '/Lab5/Bai1', component: Lab5Bai1 },
    { path: '/Lab5/Bai2', component: Lab5Bai2 },
    { path: '/Lab5/Bai3', component: Lab5Bai3 },
    { path: '/Lab5/App', component: Lab5Bai4App },
    



    

    { path: '/Lab6/Bai1', component: Lab6Bai1 },
    { path: '/Lab6/Bai2', component: Lab6Bai2 },
    { path: '/Lab6/Bai4', component: Lab6Bai4 },








    { path: '/ASM/Login', component: LoginPage }, 
    { path: '/ASM/DangKy', component: SignUpPage },
    { path: '/ASM/TrangChu', component: TrangChu },
    { path: '/blog', name: 'BlogPage', component: BlogPage },
    {path: '/post/:id', name: 'PostDetails',component: PostDetails, },

      { path: '/profile', component: ProfileUser }, 



    


];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
