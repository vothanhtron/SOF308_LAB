<template>
 <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
             <img src="@/assets/logo-energy-pilates.png" alt="Logo" style="width: 150px"  />
             <!-- <link rel="stylesheet" href="css/bootstrap.min.css">
             <script src="js/bootstrap.min.js"></script> -->
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

   

    <section class="row" style="margin-top: 20px;">
      <div class="col-sm-4">
        <h2 class="text-info mb-4">Về tôi</h2>
        <div class="card bg">
          <img :src="require('@/assets/avatar.png')" alt="Avatar" class="avatar">
          <div class="card-body">
           <h5 class="card-title">Giới thiệu bản thân</h5>
                        <p class="card-text">Ts. Trần Hoàng, Tổ chức Tư vấn sức khỏe quốc tế độc lập <br>
                            Châm ngôn: Ta không được chọn nơi mình sinh ra, nhưng ta được chọn cách mình sẽ sống.
                        </p>
                </div>
            </div>
        </div>

        <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item">
                      <a class="nav-link active text-info mb-4" data-bs-toggle="tab" href="#home">Đọc nhiều</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-info mb-4" data-bs-toggle="tab" href="#contact">Xem nhiều</a>
                    </li>
                  </ul>

       
<div class="tab-content">
    <div id="home" class="container tab-pane active"><br>
        <div class="row my-1">
            <div class="col-4">
                <img src="assets/corevalue.jpg" class="img-fluid" alt="..." />
            </div>
            <div class="col-8">
                <h5 class="card-title">Biết ơn đời, đời sẽ thương ta</h5>
                <i class="fa-solid fa-message"></i>
            </div>
        </div>
        <div class="row my-1">
            <div class="col-4">
                <img src="assets/sesameoil_300x300.jpg" class="img-fluid" alt="..." />
            </div>
            <div class="col-8">
                <h5 class="card-title">10 công dụng bất ngờ của dầu dừa</h5>
                <i class="fa-solid fa-message"></i>
            </div>
        </div>
        <div class="row my-1">
            <div class="col-4">
                <img src="assets/spinach_300x300.jpg" class="img-fluid" alt="..." />
            </div>
            <div class="col-8">
                <h5 class="card-title">Lợi ích khi ăn rau mỗi ngày</h5>
                <i class="fa-solid fa-message"></i>
            </div>
        </div>
    </div>


    <div id="contact" class="container tab-pane fade"><br>
      <div class="row my-1">
        <div class="col-4">
        <img src="assets/orange_300x300.jpg" class="img-fluid" alt="..." />
        </div>
        <div class="col-8">
        <h5 class="card-title">9 tác dụng tuyệt vời của cam</h5>
        <i class="fa-solid fa-message"></i>
        </div>
        </div>
        <div class="row my-1">
    <div class="col-4">
    <img src="assets/sesameoil_300x300.jpg" class="img-fluid" alt="..." />
    </div>
    <div class="col-8">
    <h5 class="card-title">10 công dụng bất ngờ của dầu dừa</h5>
    <i class="fa-solid fa-message"></i>
    </div>
     </div>

    <div class="row my-1">
    <div class="col-4">
    <img src="assets/spinach_300x300.jpg" class="img-fluid" alt="..." />
    </div>
    <div class="col-8">
    <h5 class="card-title">Lợi ích khi ăn rau mỗi ngày</h5>
    <i class="fa-solid fa-message"></i>
     </div>
     </div>

    </div>
</div>

<div class="col-md-8">
 <div class="row">
  <h2 class="text-info mb-3">Blog của tôi</h2>
  <div class="row bg-body-secondary py-3 px-1">
    
    <div class="col-6">
    <div class="card mb-3">
    <div class="card-header">Phương pháp tập Pilates giúp phục hồi chấn thuơng cột sống <i
    class="fa-solid fa-message"></i> 16</div>
    <div class="card-body">
    <img src="assets/tap-piltes.jpg" class="img-fluid" alt="..." />
    <p class="card-text">Ngoài việc giúp duy trì vóc dáng, cải thiện sự linh hoạt, dẻo
     dai cho người tập, Pilates giúp cơ bắp và các khơp mọc dài hơn, kéo gần hơn...
    </p>
     </div>
      </div>
       </div>
      
       <div class="col-6">
        <div class="card mb-3">
         <div class="card-body">
          <div class="row my-1">
                                        <div class="col-4">
                                            <img src="assets/corevalue.jpg" class="img-fluid" alt="..." />
                                        </div>
                                        <div class="col-8">
                                            <h5 class="card-title">Biết ơn đời, đời sẽ thương ta</h5>
                                            <i class="fa-solid fa-message"></i> 30
                                        </div>
                                    </div>
                                    <div class="row my-1">
                                        <div class="col-4">
                                            <img src="assets/orange_300x300.jpg" class="img-fluid" alt="..." />
                                        </div>
                                        <div class="col-8">
                                            <h5 class="card-title">9 tác dụng tuyệt vời của cam</h5>
                                            <i class="fa-solid fa-message"></i> 28
                                        </div>
                                    </div>
                                    <div class="row my-1">
                                        <div class="col-4">
                                            <img src="assets/sesameoil_300x300.jpg" class="img-fluid" alt="..." />
                                        </div>
                                        <div class="col-8">
                                            <h5 class="card-title">10 công dụng bất ngờ của dầu dừa</h5>
                                            <i class="fa-solid fa-message"></i> 15
                                        </div>
                                    </div>
                                    <div class="row my-1">
                                        <div class="col-4">
                                            <img src="assets/spinach_300x300.jpg" class="img-fluid" alt="..." />
                                        </div>
                                        <div class="col-8">
                                            <h5 class="card-title">Lợi ích khi ăn rau mỗi ngày</h5>
                                            <i class="fa-solid fa-message"></i> 12
                                        </div>
                                    </div>
                                </div>
        </div> 
       </div>

       <div class="col-12 text-center">
        <button type="button" class="btn btn-info">Xem thêm</button>
       </div>

       <h2 class="text-info mb-3 text-center">Video - đừng bỏ lỡ</h2>
       <div class="card" style="width: 20rem; margin-left: 100px;">
        <img src="assets/video1.jpg" class="card-img-top" alt="...">
          <div class="card-body">
          <h5 class="card-title">Đi xa hơn để trưởng thành hơn</h5>
          <p class="card-text">Tuổi trẻ chỉ nghĩ tới những chuyến đi, đợi mong một ngày được bay nhảy trên những phương trời mới lạ. 
            Để rồi cô đơn mê mải, tuổi trẻ ấy mới muốn có một nơi để trở về</p>
            </div>
       </div>

       <div class="card" style="width: 20rem; margin-left: 50px;">
                            <img src="assets/video2.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Đi xa hơn để trưởng thành hơn</h5>
                              <p class="card-text">Guồng quay cuộc sống dẫu có vội vàng, dẫu có tấp nập đến đâu thì cũng chẳng nằm ngoài quy luật tự nhiên và bất biển xuân, hạ, thu, đông. Và rồi một năm cũ sắp trôi qua.</p>
                            </div>
                          </div>

                          <div class="card" style="width: 20rem; margin-left: 100px; margin-top: 10px;">
                            <img src="assets/video3.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Đi xa hơn để trưởng thành hơn</h5>
                              <p class="card-text">Tuổi trẻ chỉ nghĩ tới những chuyến đi, đợi mong một ngày được bay nhảy trên những phương trời mới lạ. Để rồi cô đơn mê mải, tuổi trẻ ấy mới muốn có một nơi để trở về</p>
                            </div>
                          </div>
                          
                          <div class="card" style="width: 20rem; margin-left: 50px; margin-top: 10px;">
                            <img src="assets/video4.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Đi xa hơn để trưởng thành hơn</h5>
                              <p class="card-text">Ta xem vạn vật là thầy. Tinh thần học hỏi của ta luôn rộng mở hơn tất cả các người. Ta học hỏi từ tất cả mọi vật, từ cành cây ngọn cỏ đến đám mây trên trời kia.</p>
                            </div>
                          </div>  
                          <div class="col-12 text-center" style="margin-top: 10px;" >
                            <button type="button" class="btn btn-info">Xem thêm</button>
                        </div>

        

  </div>
 </div>
</div>
    </section>
    
    <footer>
        <p>© Copyright by FPT Polytechnic</p>
    </footer>


</template>

<script>
export default {
    name: "Lab3Bai2",
}
</script>

<style scpoped>
 .image-container {
  text-align: center;
  margin-top: 10px;
}

.banner-image {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
}



  </style>
