// Import Core Modules
import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

// Import Internal Modules
import BaseCurrency from '../components/BaseCurrency';
import CompareCurrency from '../components/CompareCurrency';
import Result from '../components/Result';
import Error from '../components/Error';
import { CurrencyConverterContext } from '../context';
import Loading from '../components/Loading';
import { useEffect } from 'react';

let Home = (props) => {
  let { page, isAuthenticated,isFetchingCurrencies ,fetchCurrencies } = useContext(CurrencyConverterContext);
  useEffect(()=>{
    fetchCurrencies()
  },[])
  if (isAuthenticated) {
    if(isFetchingCurrencies){
      return <Loading />
    }
    else{
      switch (page) {
        case 'base-currency':
          return <BaseCurrency />;
        case 'compare-currency':
          return <CompareCurrency />;
        case 'results':
          return <Result {...props} />;
        case 'error' : 
          return  <Error {...props} /> 
        default:
          return <BaseCurrency />;
      }
    }
  } else {
    return <Redirect to='/' />;
  }
};

export default Home;
