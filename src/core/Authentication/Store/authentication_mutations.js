const mutations = {
  setUser(state, payload) {
    state.currentUser = payload
    state.processing = false
    state.loginError = null
  },
  setLogout(state) {
    state.currentUser = null
    state.processing = false
    state.loginError = null
  },
  setProcessing(state, payload) {
    state.processing = payload
    state.loginError = null
  },
  setError(state, payload) {
    state.loginError = payload
    state.currentUser = null
    state.processing = false
  },
  setForgotMailSuccess(state) {
    state.loginError = null
    state.currentUser = null
    state.processing = false
    state.forgotMailSuccess = true
  },
  setResetPasswordSuccess(state) {
    state.loginError = null
    state.currentUser = null
    state.processing = false
    state.resetPasswordSuccess = true
  },
  clearError(state) {
    state.loginError = null
  }
}

export default mutations
