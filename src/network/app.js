import {request} from "./reuqest";

export function appVisit(username) {
  return request({
    url: '/app/visit',
    headers: {'Content-Type': 'application/json'},
    method: 'post',
    data: {
      username
    }
  })
}

export function getVisit() {
  return request({
    url: '/app/getVisit',
    headers: {'Content-Type': 'application/json'},
    method: 'post',
    data: {
      username: sessionStorage.userName
    }
  })
}