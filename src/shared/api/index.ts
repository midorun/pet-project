import axios from 'axios'

import { LocalStorageKeysEnum } from 'shared/const/localStorageKeys'

const rest = axios.create({
  baseURL: __API_BASE_URL__,
  headers: {
    Authorization: localStorage.getItem(LocalStorageKeysEnum.IS_AUTHORIZED),
  },
})

rest.interceptors.request.use(
  async (config) => {
    // console.log(config)

    return config
  },
  async (error) => {}
)

rest.interceptors.response.use(
  async (response) => {
    // console.log(response)

    return response
  },
  async (error) => {
    return await Promise.reject(error)
  }
)

export default rest
