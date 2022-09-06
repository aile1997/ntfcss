// import axios from 'axios'

// // axios的实例对象
// // 1.模拟get请求
// axios.get('https://getman.cn/mock/getName').then((res) => {
//   console.log(res.data)
// })

import hyRequest from './index'

enum LoginAPI {
  AccountLogin = '/getName',
  LoginUserInfo = '/getName'
}

export function accountLoginRequest(account: any) {
  return hyRequest.post({
    url: LoginAPI.AccountLogin,
    data: account
  })
}
export function requestUserInfoById() {
  return hyRequest.get({
    url: LoginAPI.LoginUserInfo
  })
}
