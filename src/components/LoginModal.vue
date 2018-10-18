<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <loader v-if="isFetching"></loader>
        <div v-if="!isFetching" class="modal-container">

          <div class="modal-header py-1 px-0">
            <slot name="header">
              <span class="h4 font-weight-bold">Login</span>
              <button type="button" class="close text-right" aria-label="Close" @click="closeLoginModal()">
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
                    <button type="button" class="close" @click="hideLoginError()">
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <i class="fas fa-info fa-lg"></i>
                    <p>{{ error }}</p> 
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <button type="submit" :disabled="disableSubmit" class="btn btn-primary btn-lg btn-block" @click="doLogin()">Submit</button>
                    <button type="button" class="btn btn-secondary btn-lg btn-block" @click="closeLoginModal()">Cancel</button>
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
import { Mutations, Actions } from '../types'
import { mapState } from 'vuex'
import Loader from '@/components/Loader.vue'

export default {
  name: 'LoginModal',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async doLogin() {
      this.$store.commit(Mutations.SHOW_LOADER)
      const { email, password } = this;
      const ok = await this.$store.dispatch(Actions.LOGIN, { email, password })
      if (ok) {
        this.$emit('success')
      }
      this.$store.commit(Mutations.HIDE_LOADER)
    },
    closeLoginModal() {
      this.$store.commit(Mutations.HIDE_LOGIN_MODAL)
    },
    hideLoginError() {
      this.$store.commit(Mutations.HIDE_LOGIN_ERROR)
    }
  },
  components: {
    Loader
  },
  computed: mapState({
    disableSubmit() {
      return this.email && this.password ? false : true
    },
    showError: 'showLoginError',
    isFetching: 'isFetching',
    error: 'loginError'
  }),
  mounted() {
    this.password = '';
  }
}
</script>

<style>
.modal-container {
  width: 400px;
}
</style>
