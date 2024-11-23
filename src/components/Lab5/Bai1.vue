<template>
    <div class="p-5">
      <p>{{ message }}</p>
      <button class="btn btn-dark" @click="updateMessage">Thay đổi thông điệp</button>    
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  
  export default {
    name: "Lab5Bai1",
    setup() {
      const message = ref('Thông điệp ban đầu');
      const updateMessage = () => {
        message.value = 'Thông điệp đã được thay đổi!';
      };
  
      // Trả về các biến và hàm để sử dụng trong template
      return {
        message,
        updateMessage
      };
    }
  };
  </script>
  
  <style>
  </style>
  