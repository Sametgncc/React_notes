import React, { useState } from 'react'
import Child from './child'

const Parent = () => {

    const [counter, setCounter] = useState(0);

    const handleCounter  = (val ) => {

        if (val === -1 && counter === 0) return; 

        setCounter((prev) => prev + val)
      
    }
    

  return (
    <div className='text-center mt-5'>
        <h1>{counter}</h1>
      <Child handleCounter={handleCounter}/>  
    
    </div>
  )
}

export default Parent
