<template>
    <div class="container mt-3">
      <h3>Bài tập ứng dụng Modal cho Tài khoản</h3>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#myModal"
      >
        Tài khoản
      </button>
    </div>
  
    <div
      class="modal fade"
      id="myModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">ĐĂNG NHẬP/ ĐĂNG KÝ</h4>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <ul class="nav nav-tabs" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  data-bs-toggle="tab"
                  href="#register"
                  key="register-tab"
                >Đăng Ký</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-bs-toggle="tab"
                  href="#login"
                  key="login-tab"
                >Đăng Nhập</a>
              </li>
            </ul>
  
            <div class="tab-content mt-3">
              
              <div id="register" class="tab-pane active">
                <div class="card p-4">
                  <h5 class="card-title">Form Đăng Ký Thông Tin</h5>
                  <form>
                    <div class="mb-3">
                      <label for="name" class="form-label">Họ và Tên</label>
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        placeholder="Nhập họ và tên"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="email" class="form-label">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="Nhập email"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="phone" class="form-label">Số Điện Thoại</label>
                      <input
                        type="tel"
                        class="form-control"
                        id="phone"
                        placeholder="Nhập số điện thoại"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="password" class="form-label">Mật Khẩu</label>
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                        placeholder="Nhập mật khẩu"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="confirm-password" class="form-label">Xác Nhận Mật Khẩu</label>
                      <input
                        type="password"
                        class="form-control"
                        id="confirm-password"
                        placeholder="Xác nhận mật khẩu"
                      />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Giới Tính:</label>
                      <div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="gender"
                            id="male"
                            value="Nam"
                          />
                          <label class="form-check-label" for="male">Nam</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="gender"
                            id="female"
                            value="Nữ"
                          />
                          <label class="form-check-label" for="female">Nữ</label>
                        </div>
                      </div>
                    </div>
                    <div class="mb-3">
                      <label for="language" class="form-label">Ngôn Ngữ</label>
                      <select class="form-select" id="language">
                        <option>Tiếng Việt</option>
                        <option>English</option>
                        <option>日本語</option>
                      </select>
                    </div>
                    <div class="mb-3 form-check">
                      <input type="checkbox" class="form-check-input" id="terms" />
                      <label class="form-check-label" for="terms"
                        >Tôi đồng ý với các điều khoản và điều kiện</label
                      >
                    </div>
                    <button type="submit" class="btn btn-primary">Đăng Ký</button>
                  </form>
                </div>
              </div>
  
              <div id="login" class="tab-pane fade">
                <div class="card p-4">
                  <h5 class="card-title">Form Đăng Nhập</h5>
                  <form class="was-validated">
                    <div class="mb-3 mt-3">
                      <label for="uname" class="form-label">Họ và tên:</label>
                      <input
                        type="text"
                        class="form-control"
                        id="uname"
                        placeholder="Nhập họ tên"
                        required
                      />
                      <div class="valid-feedback">Hợp lệ</div>
                      <div class="invalid-feedback">Vui lòng điền vào trường này</div>
                    </div>
                    <div class="mb-3">
                      <label for="pwd" class="form-label">Mật khẩu:</label>
                      <input
                        type="password"
                        class="form-control"
                        id="pwd"
                        placeholder="Nhập mật khẩu"
                        required
                      />
                      <div class="valid-feedback">Hợp lệ</div>
                      <div class="invalid-feedback">Vui lòng điền vào trường này</div>
                    </div>
                    <div class="form-check mb-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="myCheck"
                        required
                      />
                      <label class="form-check-label" for="myCheck"
                        >Đồng ý với các điều khoản</label
                      >
                      <div class="valid-feedback">Hợp lệ</div>
                      <div class="invalid-feedback">Tick vào hộp thoại để xác nhận</div>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Lab2Bai2Component",
  };
  </script>
  
  <style scoped>
  .card-title {
    font-weight: bold;
  }
  </style>
  