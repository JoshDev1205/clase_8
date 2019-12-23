import AuthorPage from './pages/AuthorPage'
import CreateAuthor from './components/CreateAuthor'
import ListAuthor from './components/ListAuthors'
import EditAuthor from './components/EditAuthor'

export const AuthorRoutes = [
  {
    path: '/author',
    component: AuthorPage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/author/create',
    component: CreateAuthor,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/author/list',
    component: ListAuthor,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/author/:id',
    component: EditAuthor,
    name: 'editauthor',
    meta: {
      requiresAuth: true
    }
  }
]
