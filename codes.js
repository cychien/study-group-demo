// TodoApp
handleAddClick = () => {
  const now = new Date()
  const item = {
    name: this.state.text, 
    time: `${now.getMinutes() + 1}分${now.getSeconds()}秒`,
    key: now.getTime()
  }      
  this.setState({
    data: [...this.state.data, item],
    text: ''
  })
}

handleTextChange = (text) => {
  this.setState({
    text
  })
}

handleDeleteClick = (index) => {
  this.setState({
    data: this.state.data.filter( (item, i) => (i !== index) )
  })
}

render () {
  return (
    <div>
      <div className='row mt-5'>
        <div className='col-sm-9'>
          <TextInput text={this.state.text} textChangeHandler={this.handleTextChange}/>
        </div>
        <div className='col-sm-3'>
          <button 
            type="button" 
            className="btn btn-primary" 
            onClick={ () => {this.handleAddClick()} }
            disabled={!(this.state.text.trim())}
          >
            Add
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <TodoList data={this.state.data} deleteClickHandler={this.handleDeleteClick}/>
        </div>
      </div>
    </div>
  )
}

// TextInput
import React from 'react'

const TextInput = (props) => {
  const {text, textChangeHandler} = props

  return (
    <input 
      type='text'
      placeholder='type something' 
      className='form-control' 
      value={text}
      onChange={() => {textChangeHandler(e.target.value)}}
      autoFocus
    />
  )
}

export default TextInput

// TodoItem
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

// TodoList
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