/**
 * @param(func,delay)
 *防抖函数
 */
export function debounce(func, delay) {
  let timer = null;
  
  return function(...args) {
    if(timer) clearTimeout(timer);
    
    timer = setTimeout(() => {
      func.apply(this, args)
    },delay)
  }
}

export function throttle(func, delay = 500) {
  let flag = true;
  return (...args) => {
    if(!flag) return;
    flag = false;
    setTimeout(() => {
      func.apply(this, args)
      flag = true
    }, delay)
  }
}
