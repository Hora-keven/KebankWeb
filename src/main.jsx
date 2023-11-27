import React from 'react'
import ReactDOM from 'react-dom/client'
import router from "./App.jsx"
import './index.css'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { InformationProvider } from './context/InformationsContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InformationProvider>
      <RouterProvider router={router} />
    </InformationProvider>
  </React.StrictMode>,
)
