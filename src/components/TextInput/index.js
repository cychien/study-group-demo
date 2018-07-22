import React from 'react'

const TextInput = (props) => {

  return (
    <input 
      type='text'
      placeholder='type something' 
      className='form-control' 
      value={''}
      onChange={ () => {} }
      autoFocus
    />
  )
}

export default TextInput