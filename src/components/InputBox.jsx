import React, { useId } from 'react'

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisabled = false,
  currencyDisable = false,

  className="",

}) {

  const amountInputId = useId()

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className='w-1/2'>

      {/*  label can be more optimized by using useId hook used for generating unique IDs that can be passed to accessibility attributes */}
      <label htmlFor={amountInputId}
      className="text-black/40 mb-2 inline-block">
        {label}

      </label>
          
          <input
          id={amountInputId}
          className='w-full outline-none bg-transparent py-1.5'
          type="number"
          placeholder='amount'
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          />
      </div>
      <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p>
          Currency Type
        </p>
        <select className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
        value={selectCurrency}
        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        disabled={currencyDisable}>

// creating loop for currency options
          {currencyOptions.map((currency) => 
          (
            //study about key , to get performance to repeat elements we need to use key 
            <option key={currency} value={currency}>{currency}</option>
            ))}
        </select>
      </div>
    </div>
  )
}

export default InputBox