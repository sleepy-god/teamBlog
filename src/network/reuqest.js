import axios from "axios"
// axios.defaults.withCredentials=true;
// axios.defaults.withCredentials=true

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000
  });
  
  instance.interceptors.request.use(config => {
    config.data = JSON.stringify(config.data);
    config.headers = {
      'Content-Type': 'application/json'
    };
    return config
  }, error => {
    console.log(error);
  })
  
  return instance(config)
}