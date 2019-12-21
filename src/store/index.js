import Vue from 'vue'
import Vuex from 'vuex'
import { LoginStore } from '@/modules/login/store'
import { AuthorStore } from '@/modules/author/store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login: { ...LoginStore },
    author: { ...AuthorStore },
  },
})
