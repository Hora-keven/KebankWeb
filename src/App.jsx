import { createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Informations'
import Login from './Pages/Login'

const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/informations",
      element:<Contact/>
    },
    {
      path:"/login",
      element:<Login/>
    }
  ])
  export default router