// Import Core Modules
import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import Internal Modules
import { CurrencyConverterContext } from '../context';

let BaseCurrency = () => {
  let {
    setPage,
    baseCurrency,
    setBaseCurrency,
    availableCurrencies,
    fetchCurrencies,
  } = useContext(CurrencyConverterContext);
  let [error, setError] = useState();

  let handleChange = (e) => {
    setError('');
    setBaseCurrency(e.target.value);
  };

  let navigate = () => {
    if (baseCurrency.length === 0) {
      setError('Please select your base currency.');
    } else {
      fetchCurrencies(baseCurrency);
      setPage('compare-currency');
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity: 1 }}
        exit={{ x: '100px' }}
        className='flex justify-center h-screen items-center'
      >
        <div className='border border-white wrapper mx-auto p-6'>
          <h3 className='text-white text-left mt-20'>
            Select your base currency
          </h3>
          <select
            className='w-full p-2 mt-4 text-gray-800 rounded'
            value={baseCurrency}
            onChange={handleChange}
          >
            <option value=''>Currency code(INR,USD,EUR)</option>
            {availableCurrencies.map((currency, index) => (
              <option key={index} value={currency}>
                {currency}
              </option>
            ))}
          </select>
          {error ? <p className='my-2 text-sm text-red-400'>{error}</p> : null}
          <button
            className='bg-black block mx-auto my-4 py-1 w-20 text-white rounded'
            onClick={navigate}
          >
            Next
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BaseCurrency;
