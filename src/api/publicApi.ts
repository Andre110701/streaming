import axios from 'axios'

const url = process.env.NEXT_PUBLIC_PUBLIC_URL

const publicApi = axios.create({
  baseURL: url
})

export { publicApi }
