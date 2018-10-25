<template>
  <div>
    <div class="jumbotron">
      <h1 class="display-3">Blog</h1>
      <p class="lead">Created by <a href="http://lucasdev.info" target="_blank">Lucas Vera T.</a></p>
      <hr class="my-2">
      <p>A simple blog application made with Vue.</p>
      <h4 class="m-3"><i class="fas fa-wrench fa-lg px-1"></i> This is a work in progress <i class="fas fa-wrench fa-lg px-1"></i></h4>
      <p class="lead">
        <router-link class="btn btn-primary btn-lg" role="button" to="/blog">View Posts</router-link>
      </p>
    </div>
    <div v-if="showLatestBlogPost" class="d-flex flex-column justify-content-center align-items-center p-3">
      <h3 class="align-self-start align-self-xl-center">
        Latest Blog Post
      </h3>
    </div>
    <blog-post-card-flex v-if="showLatestBlogPost"
      header-img="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"
      :title="latestBlogPost.title"
      :subtitle="latestBlogPost.subtitle"
      :id="latestBlogPost.id"
      :text="latestBlogPost.text"
    />
    <div class="m-2">
      <button type="button" class="btn btn-secondary" @click="getLatestPost()">Get Latest blog post</button>
    </div>
    <div class="m-2">
      <button type="button" class="btn btn-danger" @click="testErrorModal()">Test error</button>
    </div>
    <div class="m-2">
      <button type="button" class="btn btn-primary" @click="testLoader()">Test loader</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import moment from 'moment'
import { Mutations, Actions } from '../types'
import { mapState } from 'vuex'
import { shouldFetchData } from '../util'
import BlogPostCardFlex from '@/components/BlogPostCardFlex.vue'

export default {
  name: 'home',
  data() {
    return {
      latestBlogPostQueryMoment: moment()
    };
  },
  methods: {
    testLoader() {
      this.$store.commit(Mutations.SHOW_LOADER)
      setTimeout(() => {
        this.$store.commit(Mutations.HIDE_LOADER)
      }, 1000)
    },
    testErrorModal() {
      this.$store.commit(Mutations.SHOW_ERROR_MODAL, { body: 'Testing error modal. Here goes the error description.', title: 'Test Error with long title' })
    },
    async getLatestPost(force = false) {
      if (!shouldFetchData(this.latestBlogPostQueryMoment) && !force) {
        return
      }
      this.$store.commit(Mutations.SHOW_LOADER)
      const ok = await this.$store.dispatch(Actions.GET_LATEST_BLOG_POST)
      if (ok) {
        this.latestBlogPostQueryMoment = moment()
      }
      this.$store.commit(Mutations.HIDE_LOADER)
      return ok
    }
  },
  computed: {
    showLatestBlogPost() {
      return this.latestBlogPost && this.latestBlogPost.id
    },
    ...mapState([
      'count',
      'latestBlogPost'
    ])
  },
  components: {
    BlogPostCardFlex
  },
  async mounted() {
    await this.getLatestPost(true)
  }
}
</script>

<style>

</style>
