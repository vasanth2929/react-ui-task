// Import Core Modules
import React, { useContext } from 'react';
import { GoogleLogout } from 'react-google-login';
import { motion, AnimatePresence } from 'framer-motion';

// Import Internal Modules
import { CurrencyConverterContext } from '../context';

let Result = () => {
  let {
    baseCurrency,
    setPage,
    rates,
    compareCurrencies,
    setIsAuthenticated,
    fetchCurrencies
  } = useContext(CurrencyConverterContext);

  let logout = () => {
    setPage('base-currency');
    localStorage.setItem('isAuthenticated',false);
    setIsAuthenticated(false);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity: 1 }}
        exit={{ x: '100px' }}
        className='flex justify-center h-screen items-center'
      >
        <div className='relative border border-white wrapper mx-auto p-2 px-8 text-white'>
          <div className='flex justify-between text-white my-2 pb-4 border-b'>
            <p>
              {baseCurrency.toUpperCase()} value : 1{' '}
              {baseCurrency.toUpperCase()}
            </p>
            <button
              className='text-sm'
              onClick={() => setPage('base-currency')}
            >
              Edit Base Currency
            </button>
          </div>
          <div className='my-4 flex justify-between'>
            <p>Today's Value </p>
            <button
              className='text-sm'
              onClick={() => setPage('compare-currency')}
            >
              <i className='fa fa-plus mr-1'></i>
              Add More currencies
            </button>
          </div>
          <div>
            {compareCurrencies.map((currency, index) => (
              <p key={index} className='my-1'>
                {currency} Value : {rates['rates'][currency]}
              </p>
            ))}
          </div>
          <GoogleLogout
            onLogoutSuccess={logout}
            render={(props) => {
              return (
                <button
                  onClick={props.onClick}
                  disabled={props.disabled}
                  className='absolute bg-black block mx-auto my-4 py-1 w-20 text-white rounded'
                  style={{ bottom: '-100px', left: '43%' }}
                >
                  Logout
                </button>
              );
            }}
            clientId='214925501565-3lu8icroub1f4037la2r1mqdvhf057i6.apps.googleusercontent.com'
          ></GoogleLogout>
          <button className='absolute z-10' style={{ top:"-50px", right: '0px' }} onClick={fetchCurrencies}>
            <i className='fa fa-redo'></i> Refresh
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Result;
