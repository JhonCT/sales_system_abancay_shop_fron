import axios from "axios"
import { apiUrl } from "@/constants/config"
import querystring from "querystring"
import baseAxios from "@/axios"

const AuthenticationService = {
  login: (username, password) => {
    return axios.post(apiUrl + "/oauth/token", querystring.stringify({
      "grant_type": "password",
      "username": username,
      "password": password,
    }), {
      headers: {
        'Authorization': 'Basic QWJhbmNheVNob3A6QWJhbmNheVNob3A=',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
  },
  getCurrentUser: (username) => {
    return baseAxios.get(`${apiUrl}/user/${username}/profile`, { "username": username })
  },
  persistToken: (tokenInformation) => {
    localStorage.setItem('accessToken', tokenInformation.access_token)
    localStorage.setItem('refreshToken', tokenInformation.refresh_token)
    localStorage.setItem('tokenType', tokenInformation.token_type)
    localStorage.setItem('expiresIn', tokenInformation.expires_in)
    return tokenInformation == null ? false : true;
  },
  signOut: () => {
    return new Promise(function (resolve, reject) {
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
      localStorage.removeItem('expiresIn')
      localStorage.removeItem('tokenType')
      resolve()
    })
  }
}

export default AuthenticationService
