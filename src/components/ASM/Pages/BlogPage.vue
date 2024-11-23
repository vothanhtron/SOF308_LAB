<template>
    <div class="blog">
      <h2>Đăng Bài Viết</h2>
  
      <div class="search-bar">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Tìm kiếm bài viết..."
          class="search-input"
        />
        <button @click="searchPosts" class="search-button">Tìm kiếm</button>
      </div>
  
      <form @submit.prevent="submitForm" class="post-form">
        <input
          type="text"
          v-model="newPost.title"
          placeholder="Tiêu đề bài viết"
          required
          class="form-input"
        />
        <textarea
          v-model="newPost.content"
          placeholder="Nội dung bài viết"
          required
          class="form-textarea"
        ></textarea>
        <input
          type="file"
          @change="handleImageUpload"
          class="file-input"
        />
  
        <button type="submit" class="submit-button">
          {{ editingPostId ? 'Lưu Chỉnh Sửa' : 'Đăng Bài' }}
        </button>
      </form>
  
      <div class="posts">
        <h2>Các Bài Viết</h2>
        <div v-for="post in filteredPosts" :key="post.id" class="post">
          <BlogPost :post="post" @edit="editPost" @delete="deletePost" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import BlogPost from './BlogPost.vue';
  
  export default {
    name: "BlogPage",
    components: {
      BlogPost
    },
    data() {
      return {
        posts: [
        
        ],
        selectedPost: null, 
        newComment: {
          author: 'User',
          content: '',
        },
        newPost: {
          title: '',
          content: '',
          image: null,
        },
        editingPostId: null,
        searchQuery: '',
      };
    },
    computed: {
      filteredPosts() {
        return this.posts.filter(
          post =>
            post.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            post.content.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      },
    },
    methods: {
      handleImageUpload(event) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            this.newPost.image = reader.result;
          };
          reader.readAsDataURL(file);
        }
      },
      submitForm() {
        if (this.editingPostId) {
          const index = this.posts.findIndex(post => post.id === this.editingPostId);
          if (index !== -1) {
            this.posts[index] = { ...this.newPost, id: this.editingPostId };
          }
          this.editingPostId = null;
        } else {
          const newPost = { ...this.newPost, id: Date.now(), comments: [] };
          this.posts.push(newPost);
        }
        this.resetForm();
      },
      resetForm() {
        this.newPost = { title: '', content: '', image: null };
      },
      editPost(postId) {
        const post = this.posts.find(post => post.id === postId);
        if (post) {
          this.newPost = { ...post };
          this.editingPostId = postId;
        }
      },
      deletePost(postId) {
        this.posts = this.posts.filter(post => post.id !== postId);
      }
    }
  };
  </script>
  
  <style scoped>
  .blog {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background: #f4f4f9;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 20px;
  }
  
  .search-bar {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  .search-input {
    width: 70%;
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  .search-button {
    padding: 10px 20px;
    font-size: 1rem;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .search-button:hover {
    background-color: #45a049;
  }
  
  .post-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 30px;
  }
  
  .form-input,
  .form-textarea {
    width: 100%;
    padding: 12px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .form-textarea {
    height: 200px;
    resize: none;
  }
  
  .file-input {
    padding: 10px;
    border-radius: 5px;
    font-size: 1rem;
  }
  
  .submit-button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
  }
  
  .submit-button:hover {
    background-color: #0056b3;
  }
  
  .posts {
    margin-top: 40px;
  }
  
  .post {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    margin-bottom: 20px;
  }
  
  .post:hover {
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
  
  button {
    cursor: pointer;
  }
  
  @media (max-width: 600px) {
    .search-bar {
      flex-direction: column;
      align-items: stretch;
    }
  
    .search-input {
      width: 100%;
      margin-bottom: 10px;
    }
  
    .post-form {
      margin-top: 20px;
    }
  }
  </style>
  