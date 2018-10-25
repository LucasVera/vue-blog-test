<template>
  <div class="d-flex flex-column justify-content-center align-items-center">
    <div class="p-0">
      <div class="card">
        <router-link class="card-header" :style="cardHeaderStyle" :to="linkToDetails">
          <h3 class="card-title text-center"><span class="btn btn-link btn-lg font-weight-bold text-dark">{{ title }}</span></h3>
        </router-link>
        <div class="card-body">
          <h5 class="card-title">{{ subtitle }}</h5>
          <p class="card-text">{{ text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPostCard',
  props: {
    title: String,
    subtitle: String,
    headerImg: String,
    text: String,
    id: Number,
    cardTitle: String
  },
  computed: {
    showCardTitle() {
      return this.cardTitle && this.cardTitle !== ''
    },
    linkToDetails() {
      return `/blog/${this.id}`
    },
    cardHeaderStyle() {
      return {
        'background-image': `url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png)`
      }
    }
  }
}
</script>

<style>
.card {
  max-width: 800px;
  align-self: center;
  align-content: center;
}

.card-header {
  max-height: 300px;
  position: relative;
}

.card-header:before {
  content: '';
  position: absolute;
  top: 0; bottom: 0; right: 0; left: 0;
  background: rgba(250, 250, 250, 0.6);
}

.card-header > .card-title {
  position: relative;
}
</style>
