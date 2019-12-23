import BookPage from './pages/BookPage'
import CreateBook from './components/CreateBook'
import ListBook from './components/ListBooks'
import EditBook from './components/EditBook'

export const BookRoutes = [
  {
    path: '/book',
    component: BookPage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/book/create',
    component: CreateBook,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/book/list',
    component: ListBook,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/book/:id',
    component: EditBook,
    name: 'editbook',
    meta: {
      requiresAuth: true
    }
  }
]