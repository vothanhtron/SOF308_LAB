<template>
    <div>
      <h2>Tạo bài viết mới</h2>
      <input v-model="title" placeholder="Tiêu đề bài viết" />
      <input v-model="author" placeholder="Tên Tác Giả" />
      <textarea v-model="content" placeholder="Nội dung bài viết"></textarea>
      <button @click="submitPost">Đăng bài</button>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'Lab5Bai4Create',
    emits: ['add-post'],
    setup(props, { emit }) {
      const title = ref('');
      const content = ref('');
      const author = ref('');
  
      function submitPost() {
        if (title.value && content.value && author.value) {
          const newPost = {
            title: title.value,
            content: content.value,
            author: author.value,
          };
  
          emit('add-post', newPost);
  
          // Reset các trường nhập liệu
          title.value = '';
          content.value = '';
          author.value = '';
        }
      }
  
      return {
        title,
        content,
        author,
        submitPost,
      };
    },
  };
  </script>
  
  <style>
  input,
  textarea {
    display: block;
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
  }
  
  button {
    padding: 10px 20px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  