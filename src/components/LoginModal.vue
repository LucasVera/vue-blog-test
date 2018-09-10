<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <loader v-if="isFetching"></loader>
        <div v-if="!isFetching" class="modal-container">

          <div class="modal-header py-1 px-0">
            <slot name="header">
              <span class="h3">Login</span>
              <button type="button" class="close text-right" aria-label="Close" @click="$emit('close')">
                <span aria-hidden="true">&times;</span>
              </button>
            </slot>
          </div>

          <div class="modal-body p-0 pt-2">
            <slot name="body">
              <div class="form-group">
                <input type="email" class="form-control mb-2" placeholder="Email" v-model="email" @keyup.enter="doLogin()">
                <input type="password" class="form-control mt-2" placeholder="Password" v-model="password" @keyup.enter="doLogin()">
              </div>
            </slot>
          </div>

          <div class="modal-footer p-0">
            <slot name="footer">
              <div class="container">
                <div class="row">
                  <div class="alert alert-danger col-12" role="alert" v-if="showError">
                    <button type="button" class="close" @click="showError = false">
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <i class="fas fa-info fa-lg"></i>
                    <p>{{ error }}</p> 
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <button type="submit" :disabled="disableSubmit" class="btn btn-primary btn-lg btn-block" @click="doLogin()">Submit</button>
                    <button type="button" class="btn btn-secondary btn-lg btn-block" @click="$emit('close')">Cancel</button>
                  </div>
                </div>
              </div>
            </slot>
          </div>

        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from 'axios';
import config from '../config.js';
import Loader from './Loader.vue';

export default {
  name: 'OkModal',
  data() {
    return {
      email: '',
      password: '',
      showError: false,
      error: '',
      isFetching: false
    }
  },
  methods: {
    async doLogin() {
      try {
        this.isFetching = true;
        const { email, password } = this;
        const { data: { data }} = await axios.post(`${config.BACKEND_URL}/login`, { email, password });
        console.log(data);
        localStorage.setItem('auth-token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        this.$emit('success');
      }
      catch (ex) {
        const { status, data: { error }} = ex.response;
        this.error = `${status} - ${error}`;
        this.showError = true;
      }
      this.isFetching = false;
    }
  },
  computed: {
    disableSubmit: function() {
      return this.email && this.password ? false : true;
    }
  },
  components: {
    Loader
  },
  mounted() {
    this.password = '';
  }
}
</script>

<style>

</style>
