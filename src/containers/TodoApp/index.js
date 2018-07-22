import React, { Component } from 'react'
import TextInput from '../../components/TextInput';
import TodoList from '../../components/TodoList';

class TodoApp extends Component {
  state = {
    text: '',
    data: []
  }

  // TODO: handleAddClick = () => {}
  

  // TODO: handleTextChange = () => {}
  

  // TODO: handleDeleteClick = () => {}


  // TODO: { ... }
  render () {
    return (
      <div>
        <div className='row mt-5'>
          <div className='col-sm-9'>
            <TextInput text={''} textChangeHandler={''} />
          </div>
          <div className='col-sm-3'>
            <button 
              type="button" 
              className="btn btn-primary" 
              onClick={ () => {} }
              disabled={true}
            >
              Add
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <TodoList data={''} deleteClickHandler={''}/>
          </div>
        </div>
      </div>
    )
  }
}

export default TodoApp