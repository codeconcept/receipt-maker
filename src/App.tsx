import { createContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Estimate from './pages/EstimatePage'
import Home from './pages/Home'
import MyEstimates from './pages/MyEstimates'
import Pricing from './pages/Pricing'
import Receipt from './pages/Receipt'
import { EstimateService } from './services/estimateService'

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

// To make sure there's only a single instance of an EstimateSrv
// we put this instance in a context that we consume in all other components
const estimateSrv = new EstimateService([]);
export const EstimateCtx = createContext(estimateSrv);

function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new-estimate' element={<Estimate />} />
        <Route path='/new-receipt' element={<Receipt />} />
        <Route path='/my-estimates' element={<MyEstimates />} />
        <Route path='/pricing' element={<Pricing />} />
      </Routes>
    </div>
  )
}

export default App
