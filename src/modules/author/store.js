import AuthorServices from './services'

const SET_ALL_AUTHORS = 'author/SET_ALL_AUTHORS'
const SET_AUTHOR = 'author/SET_AUTHOR'
const UPDATE_AUTHOR = 'author/UPDATE_AUTHOR'
const CREATE_AUTHOR = 'author/CREATE_AUTHOR'

export const AuthorStore = {
  namespaced: true,
  state: {
    author: '',
    authors: [],
  },
  actions: {
    createAuthor: async ({ commit }, payload) => {
      const res = await AuthorServices.createAuthor(payload)
      commit(CREATE_AUTHOR, res.data)
    },
    getAllAuthors: async ({ commit }) => {
      const res = await AuthorServices.getAllAuthors()
      commit(SET_ALL_AUTHORS, res.data)
    },
    getAuthorById: async ({ commit }, payload) => {
      const res = await AuthorServices.getAuthor(payload)
      commit(SET_AUTHOR, res.data)
    },
    updateAuthor: async ({ commit, state }, payload) => {
      const { id } = payload
      const res = await AuthorServices.updateAuthor(id, state.author)
      commit(UPDATE_AUTHOR, res.data)
    },
  },
  mutations: {
    [CREATE_AUTHOR](state, payload) {
      state.authors.push(payload)
    },
    [SET_ALL_AUTHORS](state, payload) {
      state.authors = payload
    },
    [SET_AUTHOR](state, payload) {
      state.author = payload
    },
    [UPDATE_AUTHOR](state, payload) {
      const { authors } = state
      const newState = authors.map(author => {
        if (author._id === payload._id) {
          author = payload
        }

        return author
      })

      state.authors = newState
    },
  },
}
