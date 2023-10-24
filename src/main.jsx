import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home'
import Contato from './Pages/Contato'
import './index.css'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'



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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
