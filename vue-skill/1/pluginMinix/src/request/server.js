import axios from 'axios'
const server  = axios.create({
  baseURL:"http://localhost:9002",
  timeout:5000
})

export default server
