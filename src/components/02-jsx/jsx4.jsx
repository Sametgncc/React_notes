
import React from 'react'

export const Jsx4 = () => {

    const isAdmin = false;
    let content =""

    if(isAdmin){
        content = <div>Admin content</div>
    }else{
        content = <div>User content</div>
    }

  return (
    <div>
      {content}
    </div>
  )
}

