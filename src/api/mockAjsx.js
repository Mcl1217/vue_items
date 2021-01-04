import axios from "axios";
import NProgress from "nprogress"
import "nprogress/nprogress.css"
const service = axios.create({
    baseURL:"/mock",
    timeout:20000
})
service.interceptors.request.use(config=>{
    NProgress.start()
    return config
})
service.interceptors.response.use(
    (response)=>{
        NProgress.done()
        return response.data
    },
    (err)=>{
        NProgress.done()
        alert(err.message || "未知请求错误")
        return Promise.reject(err)
    }
)
export default service