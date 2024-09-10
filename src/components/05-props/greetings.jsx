

import React from 'react'
import Welcome from './welcome'

const Greetings = () => {
  return (
    <div>

        <Welcome firstName = "John" lastName="Done"></Welcome>
        <Welcome firstName = "Jane" lastName="Doe" textColor ="blue" ></Welcome>
      
    </div>
  )
}

export default Greetings
