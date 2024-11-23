<template>
    <div>
      <input v-model="userInput" placeholder="Nhập dữ liệu vào đây" />
      <p>Giá trị bạn nhập: {{ userInput }}</p>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: "Lab5Bai2",
    setup() {
      const userInput = ref('FPL');
  
      // Trả về biến để sử dụng trong template
      return {
        userInput
      };
    }
  };
  </script>
  
  <style>
  </style>
  