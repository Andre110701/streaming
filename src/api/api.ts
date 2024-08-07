import axios from 'axios'

const url = process.env.NEXT_PUBLIC_AUTH_URL

const api = axios.create({
  baseURL: url
})

export { api }
