import Api from './Api'
import { AxiosRequestConfig } from "axios"

class UserApi extends Api {
  constructor(config: AxiosRequestConfig) {
    super(config)
  }
}