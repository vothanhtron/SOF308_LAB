
<template>
    <div class="container">
      <header class="row bg-warning p-2">Header</header>
      <nav class="row bg-primary p-2">
        <nav class="navbar navbar-expand-sm navbar-dark">
          <div class="container">
            <a class="navbar-brand" href="Lab3Index.html">
              <img src="../assets/logo.png" alt="" style="width: 150px" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
              <ul class="navbar-nav me-auto">
                <li class="nav-item">
                  <a class="nav-link" href="Lab3ChuyenMuc.html"
                    ><i class="fa-solid fa-list"></i> Bài viết</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"
                    ><i class="fa-solid fa-film"></i> Video</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"
                    ><i class="fa-solid fa-circle-info"></i> Giới thiệu</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"
                    ><i class="fa-solid fa-calendar-days"></i> Sự kiện</a
                  >
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    ><i class="fa-solid fa-user"></i> Tài khoản</a
                  >
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Đăng nhập</a></li>
                    <li><a class="dropdown-item" href="#">Quên mật khẩu</a></li>
                    <li>
                      <a class="dropdown-item" href="#">Đăng ký thành viên</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul class="navbar-nav d-flex">
                <li class="nav-item">
                  <a class="nav-link">Tiếng Việt</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Tiếng Anh</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </nav>
      <section class="row">
        <aside class="col-sm-4 bg-success p-5">
          <div class="col-sm-4">
            <h2 class="text-info mb-3">Về tôi</h2>
            <div class="card blog">
              <img src="../assets/anh1.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Huynh Le Ngoc Thang</h5>
                <p class="card-text">MSSV:PY00113</p>
              </div>
            </div>
          </div>
          <h3 class="text-info mt-2">Chuyên mục</h3>
          <ul class="list-group">
            <li
              class="list-group-item active bg-info d-flex justify-content-between align-items-center"
            >
              <a class="nav-link" href="#">Chế độ tập</a>
              <span class="badge bg-primary rounded-pill">12</span>
            </li>
            <li
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              <a class="nav-link" href="#">Chế độ dinh dưỡng</a>
              <span class="badge bg-primary rounded-pill">15</span>
            </li>
            <li
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              <a class="nav-link" href="#">Cảm nang cuộc sống</a>
              <span class="badge bg-primary rounded-pill">99</span>
            </li>
          </ul>
          <!-- end Chuyên mục -->
        </aside>
        <article class="col-sm-8 bg-info p-5">
          <div class="container">
            <h2 class="text-info">Blog của tôi</h2>
            <div class="row">
              <div class="col-md-6">
                <div class="card">
                  <img
                    src="../assets/anh1.jpg"
                    class="card-img-top"
                    alt="Pilates exercise"
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                      Phương pháp tập Pilates giúp phục hồi chấn thương cột sống
                      <span class="text-muted">16</span>
                    </h5>
                    <p class="card-text">
                      Ngoài việc giúp duy trì vóc dáng, cải thiện sự linh hoạt,
                      dẻo dai cho người tập, Pilates giúp cơ bắp và các khớp mọc
                      dài hơn, kéo giãn hơn...
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <ul class="list-group">
                  <li
                    class="list-group-item d-flex justify-content-between align-items-center"
                  >
                    Biết ơn đời, đời sẽ thương ta
                    <span class="badge bg-secondary">30</span>
                  </li>
                  <li
                    class="list-group-item d-flex justify-content-between align-items-center"
                  >
                    9 tác dụng tuyệt vời của quả cam
                    <span class="badge bg-secondary">28</span>
                  </li>
                  <li
                    class="list-group-item d-flex justify-content-between align-items-center"
                  >
                    10 công dụng bất ngờ của dầu dừa
                    <span class="badge bg-secondary">15</span>
                  </li>
                  <li
                    class="list-group-item d-flex justify-content-between align-items-center"
                  >
                    Lợi ích khi ăn rau mỗi ngày
                    <span class="badge bg-secondary">12</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="text-center mt-3">
              <button class="btn btn-info">Xem thêm</button>
            </div>
          </div>
        </article>
      </section>
      <footer class="row bg-dark text-white py-3 mt-3">
        <div class="col text-center">
          <p class="mb-0">© Copyright by FPT Polytechnic</p>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: "Lab1Bai3",
  };
  </script>
  
  <style scoped></style>
  