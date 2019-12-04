import SignInPage from './pages/SignIn'
import SignUpPage from './pages/SignUp'

export const LoginRoutes = [
  {
    path: '/signin',
    name: 'signin',
    component: SignInPage,
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpPage,
  },
]
