import { createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import Contato from './Pages/Contato'
import Login from './Pages/Login'
const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/informations",
      element:<Contato/>
    },
    {
      path:"/login",
      element:<Login/>
    }
  ])
  export default router