<template>
    <div class="container">
      <h3>Nhập tháng của bạn:</h3>
      <input type="number" v-model.number="month" />
      <p v-if="month < 1 || month > 12" style="color: red">
        Vui lòng nhập từ tháng 1 đến tháng 12!
      </p>
      <p v-else-if="month >= 1 && month <= 3">Mùa Xuân</p>
      <p v-else-if="month <= 6">Mùa Hè</p>
      <p v-else-if="month <= 9">Mùa Thu</p>
      <p v-else>Mùa Đông</p>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  
  export default {
    name: "Lab6Bai2",
    setup() {
      const month = ref(1);
  
      return { month };
    },
  };
  </script>
  
  <style>
  .container {
    font-family: Arial, sans-serif;
    text-align: center;
    margin-top: 50px;
  }
  input {
    padding: 5px;
    margin: 10px 0;
  }
  p {
    font-size: 16px;
    font-weight: bold;
  }
  </style>
  