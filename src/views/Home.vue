<template>
  <div>
    <div class="jumbotron">
      <h1 class="display-3">Blog</h1>
      <p class="lead">Created by <a href="http://www.lucasdev.info" target="_blank">Lucas Vera T.</a></p>
      <hr class="my-2">
      <p>A simple blog application made with Vue.</p>
      <p class="lead">
        <router-link class="btn btn-primary btn-lg" role="button" to="/blog">View Posts</router-link>
      </p>
    </div>
    <div class="m-4" v-if="showLatestBlogPost">
      <div class="card" style="max-width: 300px">
        <img class="card-img-top img-fluid p-4" style="max-height: 150px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png" alt="">
        <div class="card-body">
          <h4 class="card-title text-primary"><router-link class="btn btn-link btn-lg p-0 m-0" :to="linkToDetails">{{ latestBlogPost.title }}</router-link></h4>
          <h5 class="card-title">{{ latestBlogPost.subtitle }}</h5>
          <p class="card-text">{{ latestBlogPost.text }}</p>
        </div>
      </div>
    </div>
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
      this.$store.commit(Mutations.SHOW_ERROR_MODAL, { body: 'test test 123123123test test 123123123test test 123123123', title: 'Test Error with long title' })
    },
    async getLatestPost() {
      if (!shouldFetchData(this.latestBlogPostQueryMoment)) {
        return
      }
      this.$store.commit(Mutations.SHOW_LOADER)
      const ok = await this.$store.dispatch(Actions.GET_LATEST_BLOG_POST)
      if (ok) {
        this.latestBlogPostQueryMoment = moment()
      }
      this.$store.commit(Mutations.HIDE_LOADER)
    }
  },
  computed: {
    showLatestBlogPost() {
      return true
    },
    linkToDetails() {
      return `/blog/${this.latestBlogPost.id}`
    },
    ...mapState([
      'count',
      'latestBlogPost'
    ])
  },
  async mounted() {
    //await this.getLatestPost()
  }
}
</script>
