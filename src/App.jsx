import { createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import Informations from './Pages/Informations'
import Login from './Pages/Login'

const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/informations",
      element:<Informations/>
    },
    {
      path:"/login",
      element:<Login/>
    }
  ])
  export default router
