import Vuex from 'vuex'
import { Mutations, Actions } from './types'
import config from './config'
import axios from 'axios'

export function getStore() {
  return new Vuex.Store({
    state: {
      count: 0,
      isFetching: false,
      loginModalOpened: false,
      user: null,
      authToken: '',
      loginError: '',
      showLoginError: false,
      latestBlogPost: {},
      errorModalOpen: false,
      errorModalBody: '',
      errorModalTitle: ''
    },
    mutations: {
      increment(state) {
        state.count++
      },
      [Mutations.SHOW_LOADER](state) {
        state.isFetching = true
      },
      [Mutations.HIDE_LOADER](state) {
        state.isFetching = false
      },
      [Mutations.SHOW_LOGIN_MODAL](state) {
        state.loginError = ''
        state.showLoginError = false
        state.loginModalOpened = true
      },
      [Mutations.HIDE_LOGIN_MODAL](state) {
        state.loginModalOpened = false
      },
      [Mutations.SAVE_LOGIN_DATA](state, { user, token }) {
        state.user = user
        state.authToken = token
      },
      [Mutations.CLEAR_LOGIN_DATA](state) {
        state.user = null
        state.authToken = ''
      },
      [Mutations.LOGIN_ERROR](state, { error }) {
        state.loginError = error
        state.showLoginError = true
      },
      [Mutations.HIDE_LOGIN_ERROR](state) {
        state.loginError = '',
        state.showLoginError = false
      },
      [Mutations.SAVE_LATEST_BLOG_POST](state, payload) {
        state.latestBlogPost = payload.blogPost
      },
      [Mutations.SHOW_ERROR_MODAL](state, payload) {
        state.errorModalOpen = true
        state.errorModalBody = payload.body
        state.errorModalTitle = payload.title
      },
      [Mutations.HIDE_ERROR_MODAL](state) {
        state.errorModalOpen = false
        state.errorModalBody = ''
        state.errorModalTitle = ''
      }
    },
    actions: {
      async [Actions.LOGIN]({ commit }, payload) {
        try {
          const { email, password } = payload
          const { data: { data: { user, token }}} = await axios.post(`${config.ROOT_BACKEND_URL}/login`, { email, password })
          commit(Mutations.SAVE_LOGIN_DATA, { user, token })
          return 'ok'
        }
        catch (ex) {
          const { status, data: { error }} = ex.response
          const err = `${status} - ${error}`
          commit(Mutations.LOGIN_ERROR, { error: err })
        }
      },
      async [Actions.GET_LATEST_BLOG_POST]({ commit, state }) {
        try {
          const { authToken, latestBlogPost } = state;
          if (latestBlogPost && latestBlogPost.id) {
            return 'ok'
          }
          const { data: { data: { blogPost }}} = await axios.get(`${config.VUE_BLOG_BACKEND_URL}/latestblogpost`, { headers: { Authorization: authToken }})
          commit(Mutations.SAVE_LATEST_BLOG_POST, { blogPost })
          return 'ok'
        }
        catch (ex) {
          const { status, data } = ex.response
          let err;
          if (typeof data === 'string') {
            // primitive error (probably a 401 or something like that)
            err = `${status} - ${data}`
          }
          else {
            err = `${status} - ${data.error}`
          }
          commit(Mutations.SHOW_ERROR_MODAL, { title: 'Error getting latest blog post', body: err })
        }
      }
    }
  });
}
