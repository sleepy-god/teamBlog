import {request} from "./reuqest";

export function checkName(username) {
  return request({
    url: '/user/checkName',
    headers: {'Content-Type': 'application/json'},
    method: 'post',
    data: {
      username
    }
  })
}

export function register(user) {
  return request({
    url: '/user/reg',
    headers: {'Content-Type': 'application/json'},
    method: 'post',
    data: {
      username: user.name,
      password: user.password,
      phone: user.phone,
      type: user.type,
      team: user.team
    }
  })
}


export function login(account, password) {
  console.log(account)
  return request({
    url: '/user/login',
    headers: {'Content-Type': 'application/json'},
    method: 'post',
    data: {
      account,
      password
    }
  })
}
export function getUser(username) {
  return request({
    url: '/user/getUser',
    headers: {'Content-Type': 'application/json'},
    method: 'post',
    data: {
      username: sessionStorage.userName
    }
  })
}

