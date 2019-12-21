import { httpClient } from '@/plugins/axios'

const token = localStorage.getItem('token')

httpClient.defaults.headers.common['authorization'] = token

export default {
  createAuthor(author) {
    return httpClient.post('/author', author)
  },
  getAllAuthors() {
    return httpClient.get('/author')
  },
  getAuthor(id) {
    return httpClient.get('/author/' + id)
  },
  updateAuthor(id, author) {
    return httpClient.put('/author/' + id, author)
  },
}
