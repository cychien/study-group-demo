import React from 'react'
import TodoItem from '../TodoItem';

const TodoList = (props) => {
  const {data, deleteClickHandler} = props
  return (
    <div>
      {
        data.map((item, i) => {
          return (<TodoItem item={item} key={item.key} index={i} deleteClickHandler={deleteClickHandler} />)
        })
      }
    </div>
  )
}

export default TodoList
