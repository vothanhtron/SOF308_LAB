<template>
    <div>
      <header class="navbar">
        <div class="container">
          <h1 class="logo">Music Blog
            
         </h1>
          <nav class="nav-links">
            <!--menu ngang-->
            <ul class="menu">
              <li><router-link to="/home" class="menu-item">Home</router-link></li>
              <li><router-link to="/blog" class="menu-item">Blog</router-link></li>
            <li><router-link to="/contact" class="menu-item">Contact</router-link></li>
          <li><router-link to="/profile" class="menu-item">Profile</router-link> </li>  

          </ul>

                      <div class="login-link">
              <a href="/ASM/Login" class="login-btn">Login</a>
            </div>
          </nav>
        </div>
      </header>
  
      <section class="hero">
        <div class="hero-content">
          <h2>Welcome to Music Blog</h2>
          <p>Khám phá những tin tức, bài đánh giá và thông tin chuyên sâu mới nhất trong thế giới âm nhạc.
        </p>
        </div>
        <div class="welcome-image">
            <img src="assets/background1.jpg" alt="Music Image">
        </div>
      </section>

      <section class="blog-feed">
  <div class="container">
    <h2>Blog Feed</h2>
    <div class="posts">
      <div class="post">
        <img src="https://truongthanhaudio.com/upload/image/top-10-bai-hat-thinh-hanh-tren-tiktok-thang-10-truong-thanh-audio-31124-5.webp" alt="Top 10 Songs" class="post-image">

        <h3 class="post-title">10 bài hát ra mắt năm 2024 làm mưa làm gió trên bảng xếp hạng
            

        </h3>
        <p class="post-excerpt">Cùng tôi điểm qua những bài hát đã ra mắt trong năm 2024 đã làm mưa làm gió bảng xếp hạng hiện nay.</p>
        <div class="post-meta">
          <span class="views"><i class="bi bi-eye"></i> 1,234 views</span>
          <span class="comments"><i class="bi bi-chat"></i> 45 comments</span>
          <span class="likes"><i class="bi bi-heart"></i> 678 likes</span>
        </div>
      </div>
      <div class="post">
        <img src="https://thethaovanhoa.mediacdn.vn/Upload/HkZGoyHWnkz0zSe1YDYTw/files/2021/up%20tet/Space%20Speaker%201.jpg" alt="Rap Viet" class="post-image">

        <h3 class="post-title">Sự bùng nổ của Rap ở Việt Nam vài năm gần đây</h3>
        <p class="post-excerpt">23 năm rap Việt: Mạch ngầm thành dòng chủ lưu cuộn sóng</p>
        <div class="post-meta">
          <span class="views"><i class="bi bi-eye"></i> 987 views</span>
          <span class="comments"><i class="bi bi-chat"></i> 23 comments</span>
          <span class="likes"><i class="bi bi-heart"></i> 543 likes</span>
        </div>
      </div>
      <div class="post">
        <h3 class="post-title">Hip-Hop's Evolution in the 2020s</h3>
        <p class="post-excerpt">How hip-hop transformed over the last decade.</p>
        <div class="post-meta">
          <span class="views"><i class="bi bi-eye"></i> 1,567 views</span>
          <span class="comments"><i class="bi bi-chat"></i> 89 comments</span>
          <span class="likes"><i class="bi bi-heart"></i> 345 likes</span>
        </div>
      </div>
    </div>
  </div>
</section>

  
     <section class="blog-posts">
      <div class="container">
        <h2>Các bài viết nổi bật</h2>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="post in posts" :key="post.id">
              <img :src="post.image" alt="Post Image" class="post-image" />
              <h3>{{ post.title }}</h3>
              <p>{{ post.excerpt }}</p>
              <a href="#" class="read-more">Read More</a>
            </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
    </section>

  
      <footer class="footer">
        <div class="container">
          <p>&copy; 2024 Music Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  import Swiper from 'swiper';
import 'swiper/css'; 

  export default {
    name: "TrangChu",
    data() {
      return {
        posts: [
          {
            id: 1,
            title: "G-Dragon tái xuất sau 7 năm với Power",
            excerpt: "Những ngày gần đây, đi đâu cũng gặp... G-Dragon,",
            image: "https://bazaarvietnam.vn/wp-content/uploads/2024/10/bzvn-g-dragon-power-mv-3.jpg",
          },
          {
            id: 2,
            title: "Hành Trình Trở Thành Sao Hạng A của HIEUTHUHAI",
            excerpt: "An in-depth look at how indie pop has taken over the charts.",
            image: "https://kenh14cdn.com/203336854389633024/2024/11/11/46613028910308947755044203138003606130595416n-1731294034122616811132-1731297048649-1731297049172100672143.jpeg",
          },
          {
            id: 3,
            title: "Tìm Hiểu Về Nguồn Gốc Và Lịch Sử Dòng Nhạc Rap",
            excerpt: "Quay ngược lại dòng chảy thời gian, dòng nhạc Rap xuất hiện lần đầu tiên từ những ca sĩ, nghệ sĩ da màu của Mỹ có gốc Tây Ban Nha vào khoảng thập niên 70 của thế kỷ trước tại thành phố New York.",
            image: "https://th.bing.com/th/id/OIP.odpp7D5vYg-neqDPZUtsKAHaHa?rs=1&pid=ImgDetMain",
          },
        ],
      };
    },
    mounted() {
        new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: true,
      breakpoints: {
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  },
  };
  </script>
  
  <style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
  }
.blog-feed {
  padding: 2rem 0;
  background-color: #fff;
}

.blog-feed h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.posts {
  display: flex;
  flex-wrap: wrap; 
  gap: 2rem; 
  justify-content: center; 
}

.post {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  text-align: center;
  flex: 1 1 calc(33.33% - 2rem); 
  box-sizing: border-box;
}

.post-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.post-excerpt {
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
}

.post-meta {
  font-size: 0.9rem;
  color: #777;
}

.post-meta span {
  margin-right: 1rem;
}

.post-meta i {
  margin-right: 0.5rem;
}

.post-meta .views,
.post-meta .comments,
.post-meta .likes {
  display: inline-block;
}

.post-meta .views i {
  color: #17a2b8;
}

.post-meta .comments i {
  color: #ffc107;
}

.post-meta .likes i {
  color: #e83e8c;
}

.post-meta span:hover {
  color: #007bff;
}

.post-meta span:hover i {
  color: #0056b3;
}


.post-image {
  width: 100%;           
  height: auto;          
  border-radius: 10px;   
  object-fit: cover;     
  margin-bottom: 1rem;   
}

  

  .navbar {
    background-color: #333;
    color: #fff;
    padding: 1rem;
  }
  
  .navbar .logo {
    font-size: 1.8rem;
    font-weight: bold;
    color: #fff;
  }
  
  .navbar .nav-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .nav-links ul {
    display: flex;
    list-style: none;
  }
  
  .nav-links li {
    margin: 0 0.5rem;
  }

  .menu {
  display: flex;
  list-style: none;
}

.menu li {
  margin: 0 1rem;
}

.menu-item {
  color: #fff;
  font-size: 1.2rem;
  text-decoration: none;
}

.menu-item:hover {
  color: #007bff;
}
  
  .social-links a {
    color: #fff;
    font-size: 1.5rem;
    text-decoration: none;
  }
  
  .social-links a:hover {
    color: #007bff;
  }
  
  .login-btn {
    color: #fff;
    padding: 0.5rem 1rem;
    background-color: #040506;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 380px ;
  }
  
  .login-btn:hover {
    background-color: #2dd4e7;
  }
  .welcome-image img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
  

  .hero {
    background-image: url('https://example.com/your-image.jpg');
    background-size: cover;
    background-position: center;
    text-align: center;
    padding: 3rem 0;
  }
  
  .hero-content {
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    display: inline-block;
    padding: 2rem;
    border-radius: 10px;
  }
  
  .hero h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  .hero p {
    font-size: 1.2rem;
  }

.blog-posts {
  padding: 2rem 0;
}

.blog-posts h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.swiper-container {
  width: 100%;
  height: auto;
}

.swiper-slide {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 1rem;
}

.post-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.read-more {
  display: inline-block;
  margin-top: 1rem;
  color: #007bff;
  font-weight: bold;
  text-decoration: none;
}

.read-more:hover {
  color: #0056b3;
}

.swiper-button-next, .swiper-button-prev {
  background-color: #007bff;
  color: #fff;
  border-radius: 50%;
  padding: 0.5rem;
  cursor: pointer;
}

.swiper-button-next:hover, .swiper-button-prev:hover {
  background-color: #0056b3;
}

  
  .footer {
    background-color: #333;
    color: #fff;
    padding: 1rem;
    text-align: center;
  }

  
  </style>
  