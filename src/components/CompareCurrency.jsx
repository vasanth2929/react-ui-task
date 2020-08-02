// Import Core Modules
import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Import Internal Modules
import { CurrencyConverterContext } from '../context';

let CompareCurrency = () => {
  let [currentCurrency, setCurrentCurrency] = useState('');
  let [error, setError] = useState('');

  let {
    setPage,
    baseCurrency,
    compareCurrencies,
    setCompareCurrencies,
    availableCurrencies,
  } = useContext(CurrencyConverterContext);

  let handleChange = (e) => {
    setCurrentCurrency(e.target.value);
  };

  let addCurrency = () => {
    if (currentCurrency) {
      setError('');
      if (!compareCurrencies.includes(currentCurrency)) {
        setCompareCurrencies([...compareCurrencies, currentCurrency]);
      }
    }
  };

  let handleNextButton = () => {
    if (compareCurrencies.length > 0) {
      setPage('results');
    } else {
      setError('please select alteast one currency.');
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ x: '100px' }}
        className='flex justify-center h-screen items-center'
      >
        <div className='border border-white wrapper p-2 px-6 mx-6'>
          <h3 className='text-white text-left mt-20 pb-4 border-b'>
            Base Currency : {baseCurrency}
          </h3>
          <h3 className='my-3 text-white'>Select currencies to compare</h3>
          <div className='grid grid-cols-4'>
            <select
              className='w-full p-2 mt-1 text-gray-800 rounded mr-4 col-span-3'
              value={currentCurrency}
              onChange={handleChange}
            >
              <option value=''>Currency code(INR,USD,EUR)</option>
              {availableCurrencies.map((currency, index) => {
                if (baseCurrency === currency) {
                  return null;
                } else {
                  return (
                    <option key={index} value={currency}>
                      {currency}
                    </option>
                  );
                }
              })}
            </select>
            <button
              className='text-sm text-white flex mx-auto items-center'
              onClick={addCurrency}
            >
              <i className='fa fa-plus'></i> <span className='ml-2'>Add</span>
            </button>
          </div>
          {error && <p className='my-2 text-red-400'>{error}</p>}
          <div className='my-2 grid grid-cols-5'>
            {compareCurrencies.map((currency, index) => (
              <span
                key={index}
                className='bg-blue-300 px-2 py-1 m-1 rounded-lg text-xs font-medium'
              >
                {currency}
              </span>
            ))}
          </div>
          <button
            className='bg-black block mx-auto my-4 py-1 w-20 text-white rounded'
            onClick={handleNextButton}
          >
            Next
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CompareCurrency;
