/*
能发送ajax请求的函数模块
封装axios
函数的返回值是promise
使用Promise封装axios的作用?
    1. 统一处理请求异常
    2. 异步返回的不是reponse, 而直接是response.data
 */
import axios from 'axios'

export default function ajax(url, data={}, method='GET', reqConfig) {

  return new Promise((resolve, reject) => {
    let promise
    // 执行异步ajax请求
    if(method==='GET') {
      promise = axios.get(url, {params: data}) // params配置, 指定的是query参数
      // console.log('params', data)
    } else {
      promise = axios.post(url, data, reqConfig)
    }

    promise.then(
      response => {  // 如果成功了, 调用resolve()
        resolve(response.data)  //获取数据
      },
      error => { // 如果失败了, 不调用reject(), 而是提示错误信息
        alert('请求异常: ' + error.message)
      }
    )
  })
}

