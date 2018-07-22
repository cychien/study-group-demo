import React from 'react'
import './style.css';

const TodoItem = (props) => {
  
  return (
    <div className='todo-item text-left mt-3 pl-3'>
      <div className="row">
        <div className="col-sm-6">
          {}
        </div>
        <div className="col-sm-4">
          {}
        </div>
        <div className="col-sm-2">
          <span className='remove-icon' onClick={() => {}}>
            <i className="fas fa-times" />
          </span>
        </div>
      </div>
    </div>
  )
}

export default TodoItem