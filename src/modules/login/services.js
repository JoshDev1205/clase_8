import { httpClient } from '@/plugins/axios'

export default {
  signIn({ email, password }) {
    return httpClient.post('/signin', { email, password })
  },
  signUp({ email, password }) {
    return httpClient.post('/signup', { email, password })
  },
}
