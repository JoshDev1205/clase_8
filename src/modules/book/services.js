import { httpClient } from '@/plugins/axios'

export default {
  createBook(book) {
    return httpClient.post('/book', book)
  },
  getAllBooks() {
    return httpClient.get('/book')
  },
  getBook(id) {
    return httpClient.get('/book/' + id)
  },
  updateBook(id, book) {
    return httpClient.put('/book/' + id, book)
  },
  deleteBook(id) {
    return httpClient.delete('/book/' + id)
  }
}