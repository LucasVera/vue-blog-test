<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ok-modal v-if="showModal" @close="showModal = false"></ok-modal>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import OkModal from '@/components/OkModal.vue';

export default {
  name: 'home',
  data() {
    return {
      showModal: false
    };
  },
  components: {
    HelloWorld,
    OkModal
  },
  methods: {
    openModalClicked() {
      this.showModal = true;
    }
  }
}
</script>
