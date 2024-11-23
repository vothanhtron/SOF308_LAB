<template>
    <div class="post-detail">
      <div class="container">
        <router-link to="/blog" class="back-link">← Back to Blog</router-link>
  
        <img :src="post.image" alt="Post Image" class="post-image" />
  
        <h1 class="post-title">{{ post.title }}</h1>
        <p class="post-content">{{ post.content }}</p>
  
        <div class="post-meta">
          <span class="views"><i class="bi bi-eye"></i> {{ post.views }} views</span>
          <span class="comments"><i class="bi bi-chat"></i> {{ post.comments }} comments</span>
          <span class="likes"><i class="bi bi-heart"></i> {{ post.likes }} likes</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'; 

  export default {
    name: "PostDetails",
    data() {
      return {
        post: {
          title: "Sample Post Title",
          content: "This is the detailed content of the post.",
          image: "https://example.com/sample-image.jpg",
          views: 1234,
          comments: 45,
          likes: 678,
        },
      };
    },
    created() {
      const postId = this.$route.params.id;
      this.fetchPost(postId);
    },
    
    methods: { 
        async fetchPost(postId) { 
       try{
        const response = await axios.get(`https://your-api-url/posts/${postId}`);
        this.post = response.data;
       }catch (error){
        console.error('Lỗi khi lấy dữ liệu bài viết:', error);
       }
  }
}
  }
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
  }
  .back-link {
    color: #007bff;
    font-size: 1rem;
    text-decoration: none;
  }
  .back-link:hover {
    text-decoration: underline;
  }
  .post-image {
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin-bottom: 1rem;
    object-fit: cover;
  }
  .post-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  .post-content {
    font-size: 1.2rem;
    line-height: 1.6;
    color: #333;
    margin-bottom: 1.5rem;
  }
  .post-meta {
    font-size: 0.9rem;
    color: #777;
  }
  .post-meta span {
    margin-right: 1rem;
  }
  </style>
  