import {request} from "./reuqest";

export function getAritcles() {
  return request({
    method: 'post',
    url: '/article/getArticles',
    data: {
      username: sessionStorage.userName
    }
  })
}

export function getArticle(index) {
  return request({
    method: 'post',
    url: '/article/getArticle',
    data: {
      index
    }
  })
}

export function getCates() {
  return request({
    method: 'post',
    url: '/article/getCates',
    data: {
      username: sessionStorage.userName
    }
  })
}

export function addArticle(type, content, title, brief, date, cate, tags, imgUrl) {
  return request({
    method: 'post',
    url: '/article/addArticle',
    data: {
      username: sessionStorage.userName,
      type,
      content,
      title,
      brief,
      date,
      cate,
      tags,
      imgUrl
    }
  })
}