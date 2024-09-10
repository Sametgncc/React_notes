

import React from 'react'

const Jsx5 = () => {

    const isAdmin = true;
    const discount = 400;

    // jsx yapılarında if yapısı kullanulamaz 
    // bunun yerine ternary veya short operatörleri kullanılır
    //JSX yapısı ise return yapısı içinde yer alır 

  return (
    <div>
        {isAdmin ? <h2>Admin User </h2> : <h2>Customer User </h2>}

        <div>
            {!!discount && <h3>Discount :{discount} </h3>}
        </div>
      
    </div>
  )
}

export default Jsx5
