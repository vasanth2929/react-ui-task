import React,{useContext} from 'react';
import { CurrencyConverterContext } from '../context';


let Error = ({history})=>{
    let {setPage} = useContext(CurrencyConverterContext);
    let reLoad = ()=>{
        setPage('base-currency');
        history.push('/');
    }
    return <div className="flex h-screen justify-center items-center">
        <div>
        <p className='text-red-400 p-6'>Something went wrong please check your internet connection.</p>
        <button onClick={reLoad} className="bg-black block mx-auto my-4 py-1 w-20 text-white rounded"> Reload</button>
      </div>
    </div>
}

export default Error