<template>
    <div class="profile">
      <div class="container">
        <h1 class="profile-title">Thông tin cá nhân</h1>
  
        <section class="avatar-section">
          <h2 class="section-title">Chỉnh sửa ảnh đại diện</h2>
          <div class="avatar-container">
            <img :src="user.avatar || defaultAvatar" alt="Avatar" class="avatar-img" />
            <input type="file" @change="updateAvatar" class="avatar-input" />
          </div>
        </section>
  
        <section class="profile-section">
          <h2 class="section-title">Chỉnh sửa thông tin cá nhân</h2>
          <form @submit.prevent="updateProfile">
            <div class="form-group">
              <label for="name">Tên</label>
              <input type="text" id="name" v-model="user.name" class="form-control" placeholder="Nhập tên" />
            </div>
  
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" v-model="user.email" class="form-control" placeholder="Nhập email" />
            </div>
  
            <button type="submit" class="btn btn-primary">Cập nhật thông tin</button>
          </form>
        </section>
  
        <section class="password-section">
          <h2 class="section-title">Đổi mật khẩu</h2>
          <form @submit.prevent="changePassword">
            <div class="form-group">
              <label for="newPassword">Mật khẩu mới</label>
              <input type="password" id="newPassword" v-model="user.newPassword" class="form-control" placeholder="Nhập mật khẩu mới" />
            </div>
  
            <div class="form-group">
              <label for="confirmPassword">Xác nhận mật khẩu mới</label>
              <input type="password" id="confirmPassword" v-model="user.confirmPassword" class="form-control" placeholder="Nhập lại mật khẩu mới" />
            </div>
  
            <button type="submit" class="btn btn-secondary">Đổi mật khẩu</button>
          </form>
        </section>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    name: "ProfileUser",
    data() {
      return {
        user: {
          name: "Nguyễn Văn A",  
          email: "nguyenvana@example.com",
          newPassword: "",
          confirmPassword: "",
          avatar: "", 
        },
        defaultAvatar: "https://via.placeholder.com/150", 
      };
    },
    methods: {
      
      updateProfile() {
        
        console.log("Thông tin cá nhân đã được cập nhật:", this.user);
      },
      
      
      changePassword() {
        if (this.user.newPassword !== this.user.confirmPassword) {
          alert("Mật khẩu mới và mật khẩu xác nhận không khớp!");
          return;
        }
        
        console.log("Mật khẩu đã được thay đổi!");
      },
  
      updateAvatar(event) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            this.user.avatar = reader.result;
          };
          reader.readAsDataURL(file);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Toàn bộ container */
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
}

.profile-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #ff6f61;
  margin-bottom: 2rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.section-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
  border-bottom: 2px solid #ff6f61;
  padding-bottom: 5px;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
  display: block;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.form-control {
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  border-radius: 10px;
  border: 2px solid #ccc;
  transition: all 0.3s ease;
  background-color: #f7f7f7;
}

.form-control:focus {
  border-color: #ff6f61;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(255, 111, 97, 0.5);
  outline: none;
}

.btn {
  width: 100%;
  padding: 1rem;
  font-size: 1.2rem;
  background-color: #ff6f61;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 1rem;
}

.btn:hover {
  background-color: #e84c3d;
}

.btn-secondary {
  background-color: #4caf50;
  margin-top: 2rem;
}

.btn-secondary:hover {
  background-color: #45a049;
}

.avatar-section {
  margin-top: 0;  
  text-align: center;
}

.avatar-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.avatar-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
}

.avatar-input {
  padding: 0.5rem;
  background-color: #f7f7f7;
  border: 2px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
}

.avatar-input:hover {
  background-color: #eaeaea;
}

@media (max-width: 768px) {
  .container {
    padding: 1.5rem;
  }

  .profile-title {
    font-size: 2rem;
  }

  .form-control {
    padding: 0.8rem;
    font-size: 1rem;
  }

  .btn {
    font-size: 1rem;
  }

  .btn-secondary {
    font-size: 1rem;
  }
}

  </style>
  