import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'




function App() {

const [amount, setAmount] = useState(0)
const [ from, setFrom] = useState("usd")
const [ to, setTo] = useState("inr")
const [convertedAmount, setConvertedAmount] = useState(0)


  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  return (
    <>
      <h1 className='text-3xl bg-orange-500 text-center py-20'>Currency Converter</h1>
    </>
  )
}

export default App
