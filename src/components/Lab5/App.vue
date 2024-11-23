<template>
    <div class="app-container">
      <h1>Ứng dụng Blog</h1>
      <CreatePost @add-post="addPost" />
      <PostList :posts="posts" />
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import CreatePost from "./CreatePost.vue";
  import PostList from "./PostList.vue";
  
  export default {
    name: "Lab5Bai4App",
    components: {
      CreatePost,
      PostList,
    },
    setup() {
      const posts = ref([]);
  
      const addPost = (post) => {
        posts.value.push(post);
      };
  
      return {
        posts,
        addPost,
      };
    },
  };
  </script>
  
  <style>
  .app-container {
    font-family: Arial, sans-serif;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
  }
  </style>
  