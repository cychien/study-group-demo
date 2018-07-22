import React from 'react'
import './style.css';

const TodoItem = (props) => {
  const {item, index, deleteClickHandler} = props;
  return (
    <div className='todo-item text-left mt-3 pl-3'>
      <div className="row">
        <div className="col-sm-6">
          {item.name}
        </div>
        <div className="col-sm-4">
          {item.time}
        </div>
        <div className="col-sm-2">
          <span className='remove-icon' onClick={() => {deleteClickHandler(index)}}>
            <i className="fas fa-times" />
          </span>
        </div>
      </div>
    </div>
  )
}

export default TodoItem