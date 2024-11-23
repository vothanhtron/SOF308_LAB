<template>
    <div class="form-container">
      <h1>Thông tin cá nhân</h1>
      <form>
        <div class="mb-3">
          <label>Họ và Tên:</label>
          <input v-model="userInfo.name" type="text" class="form-control" placeholder="Nhập họ và tên" />
        </div>
        <div class="mb-3">
          <label>Tuổi:</label>
          <input v-model="userInfo.age" type="number" class="form-control" placeholder="Nhập tuổi" />
        </div>
        <div class="mb-3">
          <label>Email:</label>
          <input v-model="userInfo.email" type="email" class="form-control" placeholder="Nhập email" />
        </div>
  
        <div class="info-display mt-4">
          <h2>Thông tin đã nhập:</h2>
          <p><strong>Họ và Tên:</strong> {{ userInfo.name }}</p>
          <p><strong>Tuổi:</strong> {{ userInfo.age }}</p>
          <p><strong>Email:</strong> {{ userInfo.email }}</p>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import { reactive } from 'vue';
  
  export default {
    name: "Lab5Bai3",
    setup() {
      const userInfo = reactive({
        name: '',
        age: null,
        email: ''
      });
  
      return {
        userInfo
      };
    }
  };
  </script>
  
  <style>
  body {
    font-family: 'Arial', sans-serif;
    background: #f3f4f6;
    margin: 0;
    padding: 0;
    color: #333;
  }
  
  .form-container {
    max-width: 600px;
    margin: 50px auto;
    background: #ffffff;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .form-container h1 {
    text-align: center;
    color: #007bff;
    margin-bottom: 20px;
    font-size: 1.8rem;
  }
  
  label {
    font-weight: bold;
    color: #555;
  }
  
  input.form-control {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    transition: border-color 0.3s;
  }
  
  input.form-control:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
  
  .info-display {
    background: #007bff;
    color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .info-display h2 {
    margin-bottom: 15px;
    font-size: 1.5rem;
    text-align: center;
  }
  
  .info-display p {
    margin: 5px 0;
    font-size: 1rem;
    line-height: 1.5;
  }
  
  @media (max-width: 768px) {
    .form-container {
      padding: 15px;
    }
  
    .info-display h2 {
      font-size: 1.3rem;
    }
  
    .info-display p {
      font-size: 0.9rem;
    }
  }
  </style>
  