import Api from "./Api"
import { AxiosRequestConfig } from "axios"

class TeacherApi extends Api {
  constructor(config: AxiosRequestConfig) {
    super(config)
  }

  getTeacherInfo(teacherId: number) {
    return 
  }
}