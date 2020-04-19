import axios from "@/axios"
import { apiUrl } from "@/constants/config"

const ProductService = {
  add: (payload) => {
    console.log(payload);
    return axios.post(apiUrl + "/product", payload)
  },
  all: (page, size) => {
    return axios.get(apiUrl + "/product/pagination", {
      params: {
        page: page,
        size: size,
      }
    })
  },
}

export default ProductService
