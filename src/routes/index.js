// All components mapping with path for internal routes

import { lazy } from 'react'

const Dashboard = lazy(() => import('../pages/protected/Dashboard'))
const Page404 = lazy(() => import('../pages/protected/404'))
const Transactions = lazy(() => import('../pages/protected/Transactions'))

const routes = [
  {
    path: '/dashboard', // the url
    component: Dashboard, // view rendered
  },
  {
    path: '/transactions',
    component: Transactions,
  },
  {
    path: '/404',
    component: Page404,
  }
]

export default routes
