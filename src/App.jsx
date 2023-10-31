import { createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import Contato from './Pages/Contato'
const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/conta",
      element:<Contato/>
    }
  ])
  export default router