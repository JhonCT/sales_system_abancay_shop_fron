import AuthenticationService from '../Services/authentication_service'

const actions = {
  login({ commit }, payload) {
    commit('clearError')
    commit('setProcessing', true)

    AuthenticationService.login(payload.email, payload.password).then(res => {
      AuthenticationService.persistToken(res.data)
    }, AuthenticationService.getCurrentUser(payload.email).then(user => {
      localStorage.setItem('user', JSON.stringify(user.data))
      commit('setUser', user.data)
    }), err => {
      localStorage.removeItem('user')
      commit('setError', err.message)
      setTimeout(() => {
        commit('cleanError')
      }, 3000)
    });
  },
  forgotPassword({ commit }, payload) {
    commit('clearError')
    commit('setProcessing', true)
    /*firebase
      .auth()
      .sendPasswordResetEmail(payload.email)
      .then(
        user => {
          commit('clearError')
          commit('setForgotMailSuccess')
        },
        err => {
          commit('setError', err.message)
          setTimeout(() => {
            commit('clearError')
          }, 3000)
        }
      )*/
  },
  resetPassword({ commit }, payload) {
    commit('clearError')
    commit('setProcessing', true)
    /*firebase
      .auth()
      .confirmPasswordReset(payload.resetPasswordCode, payload.newPassword)
      .then(
        user => {
          commit('clearError')
          commit('setResetPasswordSuccess')
        },
        err => {
          commit('setError', err.message)
          setTimeout(() => {
            commit('clearError')
          }, 3000)
        }
      )*/
  },

  signOut({ commit }) {
    AuthenticationService.signOut()
      .then(() => {
        localStorage.removeItem('user')
        commit('setLogout')
      }, _error => { })
  }
}

export default actions
