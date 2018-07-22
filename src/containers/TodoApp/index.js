import React, { Component } from 'react'
import TextInput from '../../components/TextInput';
import TodoList from '../../components/TodoList';

class TodoApp extends Component {
  state = {
    text: '',
    data: []
  }

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
}

export default TodoApp