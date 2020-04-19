import axios from "@/axios"
import { apiUrl } from "@/constants/config"

const ColorService = {
  all: () => {
    return axios.get(apiUrl + "/color")
  }
}

export default ColorService

