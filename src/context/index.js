import React, { createContext, useState } from 'react';
export let CurrencyConverterContext = createContext();

let Provider = ({ children }) => {
    let [page, setPage] = useState('error');
    let [isAuthenticated,setIsAuthenticated] = useState(JSON.parse(localStorage.getItem('isAuthenticated')) || false); 
    let [isFetchingCurrencies,setIsFetchingCurrencies] = useState(false);
    let [baseCurrency, setBaseCurrency] = useState('');
    let [compareCurrencies,setCompareCurrencies] = useState([]);
    let [availableCurrencies,setAvailableCurrencies] = useState([]);
    let [rates,setRates] = useState({});
    let fetchCurrencies = async () =>{
        setIsFetchingCurrencies(true);
        try {
            let result = await fetch(`https://api.exchangeratesapi.io/latest?base=${baseCurrency}`);
            let data = await result.json();
            setRates({...data});
            setAvailableCurrencies([...availableCurrencies,data["base"],...Object.keys(data["rates"])]);
        } catch (error) {
            console.error("Something Went please check your internet connection");
            setRates({"rates":{}})
            setPage('error');
        }
        finally{             
         setIsFetchingCurrencies(false);
        }
    }
    return (
        <CurrencyConverterContext.Provider
            value={{isAuthenticated,isFetchingCurrencies,setIsAuthenticated,fetchCurrencies,page, setPage, baseCurrency,rates ,setBaseCurrency ,compareCurrencies,setCompareCurrencies,availableCurrencies,setAvailableCurrencies}}
        >
            {children}
        </CurrencyConverterContext.Provider>);
}

export default Provider;