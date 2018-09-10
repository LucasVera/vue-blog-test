<template>

  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

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
export default {
  name: 'OkModal',
  props: {
    header: String,
    body: String,
    footer: String
  }
}
</script>

<style>
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
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }

  .modal-body {
    margin: 20px 0;
  }

  .modal-default-button {
    float: right;
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
