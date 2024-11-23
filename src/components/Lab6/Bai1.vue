<template>
    <div id="app">
      <h1>Xếp loại học sinh</h1>
      <div>
        <label for="dtb">Nhập điểm trung bình:</label>
        <input
          type="number"
          id="dtb"
          v-model="dtb"
          placeholder="Nhập điểm từ 0 đến 10"
          step="0.1"
        />
      </div>
      <button @click="xepLoai">Xếp loại</button>
      <p v-if="result">Xếp loại: {{ result }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name :"Lab6Bai",
    data() {
      return {
        dtb: null, 
        result: "", 
      };
    },
    methods: {
      xepLoai() {
        const dtb = parseFloat(this.dtb); 
        if (isNaN(dtb) || dtb < 0 || dtb > 10) {
          this.result = "Vui lòng nhập điểm hợp lệ từ 0 đến 10.";
          return;
        }
  
        if (dtb < 5.0) {
          this.result = "Yếu";
        } else if (dtb < 6.5) {
          this.result = "Trung bình";
        } else if (dtb < 8.0) {
          this.result = "Khá";
        } else if (dtb < 9.0) {
          this.result = "Giỏi";
        } else {
          this.result = "Xuất sắc";
        }
      },
    },
  };
  </script>
  
  <style>
  #app {
    font-family: Arial, sans-serif;
    text-align: center;
    margin-top: 50px;
  }
  input {
    margin: 10px 0;
    padding: 5px;
    width: 200px;
  }
  button {
    padding: 5px 10px;
    font-size: 16px;
    cursor: pointer;
  }
  p {
    font-size: 18px;
    font-weight: bold;
  }
  </style>
  