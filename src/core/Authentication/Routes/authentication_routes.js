const AuthenticationRoutes = {
  path: '/user',
  component: () => import('../Authentication'),
  redirect: '/user/login',
  children: [
    { path: 'login', component: () => import('../Pages/Login') },
    { path: 'register', component: () => import('../Pages/Register') },
    { path: 'forgot-password', component: () => import('../Pages/ForgotPassword') }
  ]
}

export default AuthenticationRoutes
