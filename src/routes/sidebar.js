import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon'
import CurrencyDollarIcon from '@heroicons/react/24/outline/CurrencyDollarIcon'

const iconClasses = `h-6 w-6`

const routes = [

  {
    path: '/app/dashboard',
    icon: <Squares2X2Icon className={iconClasses}/>, 
    name: 'Dashboard',
  },
  {
    path: '/app/transactions', // url
    icon: <CurrencyDollarIcon className={iconClasses}/>, // icon component
    name: 'Transactions', // name that appear in Sidebar
  }
]

export default routes


