import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Estimate from './pages/Estimate'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Receipt from './pages/Receipt'

export type Task = {
  reference: string;
  description: string;
  quantity: number;
  unitPrice: number;
  vat: number;
  // payment in advance to make sure the customer won't change his mind
  deposit: number;
}

export type Estimate = {
  id?: string;
  estimateNumber: string;
  estimateDate: Date;
  paymentDate: Date;
  title: string;
  tasks: Task[];
}

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
