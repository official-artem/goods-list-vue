import { client } from '../services/httpClient'

export const getGoods = () => {
  return client.get('/products')
}
