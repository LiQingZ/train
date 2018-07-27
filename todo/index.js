import React from 'react'
import TodoInput from './todo-input'
import './styles.css'

export default class Todo extends React.Component{
  render(){
    return (
      <div className="todo-container">
        <span className="todo-title">todos</span>
        <TodoInput />
      </div>
    )
  }
}