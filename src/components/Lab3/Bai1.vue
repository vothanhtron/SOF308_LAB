<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
            <img src="@/assets/logo-energy-pilates.png" alt="Logo" style="width: 150px"  />
        </a>
        
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <i class="bi bi-list-check"></i> Bài viết
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="bi bi-film"></i> Video
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="bi bi-exclamation-circle-fill"></i> Giới Thiệu
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="bi bi-calendar2-week"></i> Sự Kiện
              </a>
            </li>
            
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
              <i class="bi bi-person"></i> Tài khoản
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Đăng nhập</a></li>
                <li><a class="dropdown-item" href="#">Đăng ký</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Đăng ký thành viên</a></li>
              </ul>
            </li>
          </ul>
  
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">Tiếng Việt</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Tiếng Anh</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="image -container">
        <img :src="require('@/assets/banner3.jpg')" alt="Banner" class="banner-image">
    </div>
  </template>
  
  <script>
  export default {
    name: "Lab3Bai1",
  };
  </script>
  
  <style scoped>
  .navbar-brand img.logo {
    width: 30px;
    margin-right: 10px;
  }

  .image-container {
  text-align: center;
  margin-top: 10px;
}

.banner-image {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
}

.logo-container {
  position: absolute;
  top: 10px; 
  left: 10px; 
  width: 150px
}


  </style>
  