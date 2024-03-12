import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Body from './Components/Body'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from './Components/Menu'
import ProductDetails from './Components/ProductDetails.jsx'



function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = "Bloom and Spice Restaurant"
  }, [])

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Body/>}/>
        <Route path='menu' element={<Menu/>}/>
        <Route path='/details' element={<ProductDetails/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
