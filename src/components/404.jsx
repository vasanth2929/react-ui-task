import React from 'react';

let PageNotFound = (props) => {
  let goHome = ()=>{
      props.history.push('/');
  }  
  return (
    <div className='flex h-screen justify-center items-center'>
      <div>
        <p className='text-red-400 p-6'>404 page not found </p>
        <button onClick={goHome} className="bg-black block mx-auto my-4 py-1 w-20 text-white rounded"> home</button>
      </div>
    </div>
  );
};

export default PageNotFound;
