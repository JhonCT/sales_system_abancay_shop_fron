import axios from "@/axios"
import { apiUrl } from "@/constants/config"

const BrandService = {
  all: () => {
    return axios.get(apiUrl + "/brand")
  }
}

export default BrandService
