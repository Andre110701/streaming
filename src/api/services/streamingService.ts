import { AxiosResponse } from 'axios'
import { publicApi } from '../publicApi'

export const streamingService = async () => {
  const { data }: AxiosResponse = await publicApi.get(
    'http://www.omdbapi.com/?i=tt3896198&apikey=febfd0fb'
  )

  return data
}
