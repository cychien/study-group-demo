import React from 'react'

const TextInput = (props) => {
  const {text, textChangeHandler} = props

  return (
    <input 
      type='text'
      placeholder='type something' 
      className='form-control' 
      value={text}
      onChange={(e) => {textChangeHandler(e.target.value)}}
      autoFocus
    />
  )
}

export default TextInput