import axios from "axios";
import { Toast } from "zarm";

const MODE = import.meta.env.MODE // 环境变量

// 此处使用本地端项目作为服务端
axios.defaults.baseURL = MODE == 'development' ? '/api' : '127.0.0.1:7001'
axios.defaults.withCredentials = true
// 请求头设置
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers['Authorization'] = `${localStorage.getItem('token') || null}`
axios.defaults.headers.post['Content-Type'] = 'application/json' // 请求体设置
// 拦截器，拦截每一次请求
axios.interceptors.response.use(res => {
    if (typeof res.data !== 'object') {
        Toast.show('服务器异常')
        return Promisej.reject(res)
    }
    if (res.data.code != 200 ) {
        if (res.data.msg) Toast.show(res.data.msg)
        if (res.data.code == 401) {
            window.location.href = '/login'
        }
        return Promise.reject(res.data)
    }
    return res.data
})

export default axios
