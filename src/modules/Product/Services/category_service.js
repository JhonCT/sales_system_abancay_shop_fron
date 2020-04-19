import axios from "@/axios"
import { apiUrl } from "@/constants/config"

const CategoryService = {
  all: () => {
    return axios.get(apiUrl + "/category")
  }
}

export default CategoryService
