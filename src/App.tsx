import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Estimate from './pages/Estimate'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Receipt from './pages/Receipt'

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new-estimate' element={<Estimate />} />
        <Route path='/new-receipt' element={<Receipt />} />
        <Route path='/pricing' element={<Pricing />} />
      </Routes>
    </div>
  )
}

export default App
