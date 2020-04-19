const state = {
  currentUser: localStorage.getItem('user') != null ? JSON.parse(localStorage.getItem('user')) : null,
  loginError: null,
  processing: false,
  forgotMailSuccess: null,
  resetPasswordSuccess: null
}

export default state
