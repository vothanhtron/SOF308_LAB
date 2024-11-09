<template>
  <h1>Nav Bar</h1>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              LAB 2
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/Lab2/Bai1">Bai1</a></li>
              <li><a class="dropdown-item" href="/Lab2/Bai2">Bai2</a></li>
              <li><a class="dropdown-item" href="/Lab1/b3">Bai3</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              LAB3
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/Lab3/Bai1">Bai1</a></li>
              <li><a class="dropdown-item" href="/Lab3/Bai2">Bai2</a></li>
              <li><a class="dropdown-item" href="/Lab3/Bai3">Bai3</a></li>
              <li><a class="dropdown-item" href="/Lab3/Bai4">Bai4</a></li>


            </ul>
          </li>
          <!-- <li class="nav-item"> 
        <a class="nav-link disabled" href="/Lab2/Bai1">Lab </a>
      </li> -->
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped></style>
