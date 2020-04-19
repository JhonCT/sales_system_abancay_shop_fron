import axios from "@/axios"
import { apiUrl } from "@/constants/config"

const SizeService = {
  add: ({ commit }, payload) => {

  },
  all: (page, size) => {
    return axios.get(apiUrl + "/size", {
      params: {
        page: page,
        size: size,
      }
    })
  },
}

export default SizeService
