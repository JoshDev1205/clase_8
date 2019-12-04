import Vue from 'vue'
import Vuex from 'vuex'
import { LoginStore } from '@/modules/login/store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login: { ...LoginStore },
  },
})
