import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './components/Login'
import SignUp from './components/SignUp'
import ProtectedRoute from './components/ProtectedRoute'
import Products from './components/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
       <Router>
        <Routes>
          <Route path="/" element={<Login />}  />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/products" element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          } />
        </Routes>
       </Router>
      </section>
    </>
  )
}

export default App
