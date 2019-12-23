import Vue from 'vue'
import Vuex from 'vuex'
import { LoginStore } from '@/modules/login/store'
import { AuthorStore } from '@/modules/author/store'
import { BookStore } from "@/modules/book/store";

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    login: { ...LoginStore },
    author: { ...AuthorStore },
    book: { ...BookStore }
  },
})

export default store