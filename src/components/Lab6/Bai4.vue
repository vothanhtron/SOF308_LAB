<template>
    <div class="container">
      <h2>Quản lý học sinh</h2>
  
      <!-- Form thêm/sửa học sinh -->
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="name">Họ tên:</label>
          <input type="text" id="name" v-model="student.name" required />
        </div>
        <div>
          <label for="score">Điểm:</label>
          <input type="number" id="score" v-model.number="student.score" required min="0" max="10" />
        </div>
        <div>
          <label for="dob">Ngày sinh:</label>
          <input type="date" id="dob" v-model="student.dob" required />
        </div>
        <button type="submit">
          {{ isEditing ? "Cập nhật" : "Thêm" }}
        </button>
        <button type="button" v-if="isEditing" @click="resetForm">Hủy</button>
      </form>
  
      <!-- Danh sách học sinh -->
      <h3>Danh sách học sinh</h3>
      <table>
        <thead>
          <tr>
            <th>Họ tên</th>
            <th>Điểm</th>
            <th>Ngày sinh</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(student, index) in students" :key="index">
            <td>{{ student.name }}</td>
            <td>{{ student.score }}</td>
            <td>{{ student.dob }}</td>
            <td>
              <button @click="editStudent(index)">Sửa</button>
              <button @click="deleteStudent(index)">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  
  export default {
    name: "StudentManager",
    setup() {
      const students = ref([]); 
      const student = ref({ name: "", score: 0, dob: "" }); 
      const isEditing = ref(false);
      const currentIndex = ref(-1); 
      const handleSubmit = () => {
        if (isEditing.value) {
          students.value[currentIndex.value] = { ...student.value };
          resetForm();
        } else {
          students.value.push({ ...student.value });
          resetForm();
        }
      };
  
      const editStudent = (index) => {
        isEditing.value = true;
        currentIndex.value = index;
        student.value = { ...students.value[index] };
      };
  
      const deleteStudent = (index) => {
        students.value.splice(index, 1);
      };
  
      const resetForm = () => {
        student.value = { name: "", score: 0, dob: "" };
        isEditing.value = false;
        currentIndex.value = -1;
      };
  
      return {
        students,
        student,
        isEditing,
        handleSubmit,
        editStudent,
        deleteStudent,
        resetForm,
      };
    },
  };
  </script>
  
  <style>
  .container {
    font-family: Arial, sans-serif;
    max-width: 600px;
    margin: auto;
    text-align: left;
  }
  
  form {
    margin-bottom: 20px;
  }
  
  form div {
    margin-bottom: 10px;
  }
  
  form label {
    display: inline-block;
    width: 100px;
  }
  
  form input {
    padding: 5px;
    width: calc(100% - 110px);
  }
  
  button {
    margin-right: 5px;
    padding: 5px 10px;
    cursor: pointer;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  table th,
  table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  table th {
    background-color: #f4f4f4;
  }
  </style>
  