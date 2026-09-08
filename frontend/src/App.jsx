import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Product from './pages/Product'
import About from './components/About'
import Contact from './components/Contact'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<contact />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
