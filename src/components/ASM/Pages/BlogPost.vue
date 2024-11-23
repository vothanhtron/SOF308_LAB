<template>
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <p>{{ post.content }}</p>
      <img v-if="post.image" :src="post.image" alt="Image" />
      <div class="actions">
        <button @click="edit">Chỉnh Sửa</button>
        <button @click="deletePost">Xóa</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BlogPost',
    props: {
      post: Object
    },
    mounted() {
    console.log('Post data:', this.post);
  },
    methods: {
      edit() {
        this.$emit('edit', this.post.id);
      },
      deletePost() {
        this.$emit('delete', this.post.id);
      }
    }
  };
  </script>
  
  <style scoped>
  .blog-post {
    background-color: #fff;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
  .blog-post img {
    width: 100%;
    height: auto;
    margin-top: 15px;
    border-radius: 8px;
  }
  .actions button {
    padding: 8px 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-right: 10px;
  }
  .actions button:hover {
    background-color: #0056b3;
  }
  .actions button:last-child {
    background-color: #dc3545;
  }
  .actions button:last-child:hover {
    background-color: #c82333;
  }
  </style>
  