<template>
  <section class="section section-shaped section-lg my-0">
    <div class="shape shape-style-1 bg-gradient-default">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="container pt-lg-md">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <div class="card shadow border-0">
            <div class="card-header bg-white pb-5 text-center">
              <div class="btn-wrapper text-center mt-3">
                
                
              </div>
            </div>
            <div class="card-body px-lg-5 py-lg-5">
              <div class="text-center text-muted mb-4">
                <small>Or sign up with credentials</small>
              </div>
              <form @submit.prevent="submitForm">
                <div class="form-group mb-3">
                  <input type="text" class="form-control" placeholder="Name" v-model="name" required>
                </div>
                <div class="form-group mb-3">
                  <input type="email" class="form-control" placeholder="Email" v-model="email" required>
                </div>
                <div class="form-group mb-3">
                  <input type="password" class="form-control" placeholder="Password" v-model="password" required>
                </div>
                <div class="text-muted font-italic mb-3">
                  <small>Password strength: <span class="text-success font-weight-bold">strong</span></small>
                </div>
                <div class="form-check mb-3">
                  <input type="checkbox" class="form-check-input" v-model="agree">
                  <label class="form-check-label">I agree with the <a href="#">Privacy Policy</a></label>
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-primary my-4">Create account</button>
                </div>
              </form>
              <div v-if="errorMessage" class="alert alert-danger mt-3">{{ errorMessage }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SignUpPage",
  data() {
    return {
      name: '',
      email: '',
      password: '',
      agree: false,
      errorMessage: ''
    };
  },
  methods: {
    submitForm() {
      if (!this.agree) {
        this.errorMessage = "You must agree to the Privacy Policy.";
      } else {
        alert("Account created successfully!");
      }
    }
  }
};
</script>

<style scoped>
.section {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(87deg, #5e72e4 0, #825ee4 100%);
}

.shape-style-1 span {
  display: inline-block;
  position: absolute;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
}

.shape-style-1 span:nth-child(1) { width: 60px; height: 60px; left: 10%; top: 20%; }
.shape-style-1 span:nth-child(2) { width: 80px; height: 80px; left: 25%; top: 10%; animation-delay: 2s; }
.shape-style-1 span:nth-child(3) { width: 60px; height: 60px; left: 40%; top: 30%; animation-delay: 4s; }
.shape-style-1 span:nth-child(4) { width: 80px; height: 80px; left: 55%; top: 20%; animation-delay: 0s; }
.shape-style-1 span:nth-child(5) { width: 60px; height: 60px; left: 70%; top: 10%; animation-delay: 3s; }
.shape-style-1 span:nth-child(6) { width: 80px; height: 80px; left: 85%; top: 30%; animation-delay: 5s; }

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.card {
  border-radius: 15px;
  background: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn-neutral {
  background: #f7f8f9;
  color: #5e72e4;
  font-weight: bold;
  border-radius: 5px;
}

.btn-icon .icon {
  margin-right: 5px;
  width: 20px;
  height: 20px;
}

.btn-primary {
  background: #5e72e4;
  border: none;
  font-weight: bold;
  border-radius: 5px;
}

.btn-primary:hover {
  background: #4a60da;
}
</style>
