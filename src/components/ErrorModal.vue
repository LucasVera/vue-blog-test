<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header px-0">
            <slot name="header">
              <span class="h4 font-weight-bold"><i class="fas fa-exclamation-triangle fa-lg pr-4 text-danger"></i>{{ title }}</span>
            </slot>
          </div>

          <div class="modal-body px-0">
            <slot name="body">
              <p>
                {{ body }}
              </p>
            </slot>
          </div>

          <div class="modal-footer px-0">
            <slot name="footer">
              <div class="container">
                <div class="row">
                  <div class="col-12">
                    <button type="button" class="btn btn-danger btn-lg btn-block" @click="closeErrorModal()">Dismiss</button>
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
import { Mutations } from '../types'
import { mapState } from 'vuex'

export default {
  name: 'ErrorModal',
  computed: mapState({
    title: 'errorModalTitle',
    body: 'errorModalBody'
  }),
  methods: {
    closeErrorModal() {
      this.$store.commit(Mutations.HIDE_ERROR_MODAL)
    }
  }
}
</script>

<style>

</style>
