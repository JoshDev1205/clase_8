import { httpClient } from '@/plugins/axios'

const token = localStorage.getItem('token')

const config = {
  headers: {
    authorization: token
  }
}

export default {
  createAuthor(author) {
    return httpClient.post('/author', author, config)
  },
  getAllAuthors() {
    return httpClient.get('/author', config)
  },
  getAuthor(id) {
    return httpClient.get('/author/' + id, config)
  },
  updateAuthor(id, author) {
    return httpClient.put('/author/' + id, author, config)
  },
}
