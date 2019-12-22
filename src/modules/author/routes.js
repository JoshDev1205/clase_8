import AuthorPage from './pages/AuthorPage'
import CreateAuthor from './components/CreateAuthor'
export const AuthorRoutes = [
  {
    path: '/author',
    component: AuthorPage,
  },
  {
    path: '/author/create',
    component: CreateAuthor,
  },
]
