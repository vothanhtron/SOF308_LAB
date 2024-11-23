<template>
  <Navbar/>
  <router-view></router-view>
</template>

<script>

import Navbar from "./components/Navbar.vue";
import Swiper from 'swiper';
import "swiper/css";  

export default {
  name: 'App',
  components: {
    Navbar,
  },
  mounted() {
    
    new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: true,
    });
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
