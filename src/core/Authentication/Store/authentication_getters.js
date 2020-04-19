const getters = {
  currentUser: state => state.currentUser,
  processing: state => state.processing,
  loginError: state => state.loginError,
  forgotMailSuccess: state => state.forgotMailSuccess,
  resetPasswordSuccess: state => state.resetPasswordSuccess,
}

export default getters
