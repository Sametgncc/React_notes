import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loading = () => {
  return (
    <div className='vh-100 d-flex justify-content-center align-items-center'>
        <Spinner size='lg' animation='border ' variant='info' />

    </div>
  )
}

export default Loading
