<template>
  <div id="app">
  <nav class="navbar navbar-expand navbar-light bg-light">
    <div class="nav navbar-nav">
      <router-link class="nav-item nav-link" to="/">Home</router-link>
      <router-link class="nav-item nav-link" to="/blog">Blog</router-link>
    </div>
    <div class="navbar-nav flex-row ml-auto">
      <button v-if="!user" class="btn btn-primary" @click="showLoginModal = true">Login</button>
      <div v-else>
        Hello, {{ user.name }}
        <button class="btn btn-secondary" @click="logout">Logout</button>
      </div>
    </div>
  </nav>
  <login-modal v-if="showLoginModal" @close="showLoginModal = false" @success="loginSuccess"></login-modal>
  <router-view/>
  </div>
</template>

<script>
import LoginModal from './components/LoginModal.vue';

export default {
  name: 'App',
  data() {
    return {
      showLoginModal: false,
      user: JSON.parse(localStorage.getItem('user'))
    }
  },
  components: {
    LoginModal
  },
  methods: {
    loginButtonClicked() {
      this.showLoginModal = true;
    },
    loginSuccess() {
      this.showLoginModal = false;
      this.user = JSON.parse(localStorage.getItem('user'));
      this.$router.push('/about');
    },
    logout() {
      localStorage.removeItem('auth-token');
      localStorage.removeItem('user');
      this.user = null;
    }
  }
};
</script>

<style>
@import '../public/bootstrap.min.css';
</style>
