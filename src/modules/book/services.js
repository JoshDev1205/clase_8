import { httpClient } from '@/plugins/axios'

const token = localStorage.getItem('token')

const config = {
  headers: {
    authorization: token
  }
}

export default {
  createBook(book) {
    return httpClient.post('/book', book, config)
  },
  getAllBooks() {
    return httpClient.get('/book', config)
  },
  getBook(id) {
    return httpClient.get('/book/' + id, config)
  },
  updateBook(id, book) {
    return httpClient.put('/book/' + id, book, config)
  },
  deleteBook(id) {
    return httpClient.delete('/book/' + id, config)
  }
}