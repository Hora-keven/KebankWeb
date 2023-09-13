import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/Header.css'
import Header from './components/Header'
import Content from './components/Content'
import './components/Content.css'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Content/>
    <Footer/>
    </>
  )
}

export default App
