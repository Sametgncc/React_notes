import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

const UserEffect3 = () => {

    const [count, setCount] = useState(0);
    const [eror , setEror] = useState("");

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]);

  return (
    <div className='mt-5 text-center'>
        <h2>You clicked  {count} times</h2>

        <Button onClick={() => setCount((prev) => prev + 1)}>Click Me!</Button>
      
    </div>
  )
}

export default UserEffect3
