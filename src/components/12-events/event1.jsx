import React from 'react'
import { Button, Container } from 'react-bootstrap'

const Event1 = () => {

  const handleClick = () => {
    alert('Button clicked!')
  }

  // !  eğer html matığına göre handleClick de () yazarsak hata verecektir 
  // !  çünkü buttona clik yapmış diye algılar 
  

  return (
    <Container className='mt-5'>
      <h1> Event1</h1>
      <Button variant='info' id='btn' onClick={handleClick}
      >Click Me</Button>
    </Container>
  )
}

export default Event1
