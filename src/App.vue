<template>
  <div id="app">
  <nav class="navbar navbar-expand navbar-light bg-light">
    <div class="nav navbar-nav">
      <router-link class="nav-item nav-link" to="/">Home</router-link>
      <router-link class="nav-item nav-link" to="/blog">Posts</router-link>
    </div>
    <div class="navbar-nav flex-row ml-auto">
      <button v-if="!user" class="btn btn-primary" @click="loginButtonClicked">Login</button>
      <button v-else class="btn btn-secondary dropdown-toggle" id="userDropdown" aria-haspopup="true" aria-expanded="false">{{ user.name }}</button>
      <div class="dropdown-menu" aria-labelledby="userDropdown">
        <button class="dropdown-item" @click="logout">Logout</button>
      </div>
    </div>
  </nav>
  <login-modal v-if="loginModalOpened" @success="loginSuccess"></login-modal>
  <error-modal v-if="errorModalOpen"></error-modal>
  <router-view />
  </div>
</template>

<script>
import LoginModal from './components/LoginModal.vue'
import ErrorModal from './components/ErrorModal.vue'
import { Mutations } from './types'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    LoginModal,
    ErrorModal
  },
  methods: {
    loginButtonClicked() {
      this.$store.commit(Mutations.SHOW_LOGIN_MODAL)
    },
    loginSuccess() {
      this.$store.commit(Mutations.HIDE_LOGIN_MODAL)
      this.$router.push('/about')
    },
    logout() {
      this.$store.commit(Mutations.CLEAR_LOGIN_DATA)
    }
  },
  computed: mapState([
    'loginModalOpened',
    'user',
    'errorModalOpen'
  ])
};
</script>

<style>
@import '../public/bootstrap.min.css';

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
