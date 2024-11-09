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
        <img :src="require('@/assets/banner1.jpg')" alt="Banner" class="banner-image">
    </div>

    <section class="row" style="margin-top: 30px;">
    <div class="col-sm-4">
        <h3 class="text-info mt-2">Chuyên mục</h3>
        <ul class="list-group">
            <li class="list-group-item active bg-info d-flex justify-content-between align-items-center">
                <a class="nav-link" href="#">Chế độ tập</a>
                <span class="badge bg-primary rounded-pill">12</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <a class="nav-link" href="#">Chế độ dinh dưỡng</a>
                <span class="badge bg-primary rounded-pill">15</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <a class="nav-link" href="#">Cẩm nang cuộc sống</a>
                <span class="badge bg-primary rounded-pill">99</span>
            </li>
        </ul>
        <div class="card mb-3" style="margin-top: 10px;">
            <h3 class="text-info mt-2" style="margin-left: 10px;">Bài viết nổi bật</h3>
            <div class="card-body">
                <div class="row my-1">
                    <div class="col-4">
                        <img src="images/corevalue.jpg" class="img-fluid" alt="..." />
                    </div>
                    <div class="col-8">
                        <h5 class="card-title">Biết ơn đời, đời sẽ thương ta</h5>
                        <p class="card-text">Tiêu thụ rau xanh hàng ngày sẽ giúp tăng cường thị lực, kiểm soát cân nặng ...</p>
                    </div>
                </div>
                <div class="row my-1">
                    <div class="col-4">
                        <img src="images/orange_300x300.jpg" class="img-fluid" alt="..." />
                    </div>
                    <div class="col-8">
                        <h5 class="card-title">9 tác dụng tuyệt vời của cam</h5>
                        <p class="card-text">Cam tự hào về khả năng chống lão hóa mạnh mẽ nhờ hàm lượng chống oxy hóa cao ...</p>
                    </div>
                </div>
                <div class="row my-1">
                    <div class="col-4">
                        <img src="images/sesameoil_300x300.jpg" class="img-fluid" alt="..." />
                    </div>
                    <div class="col-8">
                        <h5 class="card-title">10 công dụng bất ngờ của dầu dừa</h5>
                        <p class="card-text">Dầu dừa như một loại kem dưỡng ẩm tự nhiên cho cơ thể, giúp việc sản xuất collagen trong các tế bào</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-8">
        <div class="row">
            <h2 class="text-info mb-3">Tất cả bài viết</h2>
            <div class="row bg-body-secondary py-3 px-1">
                <div class="col-6">
                    <div class="card mb-3">
                        <div class="card-header">Phương pháp tập Pilates giúp phục hồi chấn thương cột sống <i class="fa-solid fa-message"></i> 16</div>
                        <div class="card-body">
                            <img src="images/tap-piltes.jpg" class="img-fluid" alt="..." />
                            <p class="card-text">Ngoài việc giúp duy trì vóc dáng, cải thiện sự linh hoạt, dẻo dai cho người tập, Pilates giúp cơ bắp và các khớp mọc dài hơn, kéo gần hơn...</p>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="card mb-3">
                        <div class="card-header">Phương pháp tập Pilates giúp phục hồi chấn thương cột sống <i class="fa-solid fa-message"></i> 16</div>
                        <div class="card-body">
                            <img src="images/tap-pilates1.jpg" class="img-fluid" alt="..." />
                            <p class="card-text">Được thiết kế để xây dựng cơ bắp săn chắc, khỏe mạnh hơn, bài tập này đã trở thành một cái tên quen thuộc nhờ có nhiều người nổi tiếng theo dõi.</p>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="card mb-3">
                        <div class="card-header">Phương pháp tập Pilates giúp phục hồi chấn thương cột sống <i class="fa-solid fa-message"></i> 16</div>
                        <div class="card-body">
                            <img src="images/tim-mach.jpg" class="img-fluid" alt="..." />
                            <p class="card-text">Tập pilates không chỉ giúp bạn có một cơ thể khỏe mạnh và linh hoạt mà còn nhiều lợi ích cho sức khỏe tim mạch. Bài viết này sẽ tìm hiểu sâu hơn về tác động tích cực của việc tập pilates đối với sức khỏe tim mạch.</p>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="card mb-3">
                        <div class="card-header">Phương pháp tập Pilates giúp phục hồi chấn thương cột sống <i class="fa-solid fa-message"></i> 16</div>
                        <div class="card-body">
                            <img src="images/eat-clean.png" class="img-fluid" alt="..." />
                            <p class="card-text">Chúng ta luôn chú trọng lựa chọn thực phẩm sạch và duy trì lối sống lành mạnh. Vậy chế độ ăn Eat clean nên và không nên ăn gì trong thực đơn hàng ngày để cân bằng tháp dinh dưỡng cho cơ thể.</p>
                        </div>
                    </div>
                </div>
                <ul class="pagination" style="margin-left: 300px;">
                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
                <div class="col-12 text-center" style="margin-top: 20px;">
                    <button type="button" class="btn btn-info">Xem thêm</button>
                </div>
            </div>
        </div>
    </div>
</section>

</template>

<script>
export default {
    name: "Lab3Bai3",
}
</script>

<style>

</style>