
const Mutations = {
  SHOW_LOADER: 'showLoader',
  HIDE_LOADER: 'hideLoader',
  INCREMENT: 'increment',
  SHOW_LOGIN_MODAL: 'showLoginModal',
  HIDE_LOGIN_MODAL: 'hideLoginModal',
  SAVE_LOGIN_DATA: 'saveLoginData',
  CLEAR_LOGIN_DATA: 'clearLoginData',
  LOGIN_ERROR: 'loginError',
  HIDE_LOGIN_ERROR: 'hideLoginError',
  SAVE_LATEST_BLOG_POST: 'saveLatestBlogPost',
  SHOW_ERROR_MODAL: 'showErrorModal',
  HIDE_ERROR_MODAL: 'hideErrorModal'
}

const Actions = {
  LOGIN: 'login',
  GET_LATEST_BLOG_POST: 'getLatestBlogPost'
}

export {
  Mutations,
  Actions
}
