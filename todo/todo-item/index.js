import React from 'react'
import './styles.css'
import TodoList from '../todo-list';

export default class TodoItem extends React.Component{
  // state={
  //   isDone:false
  // }
  handleClick=()=>{
    const {handleStatusChange,todoItem}=this.props
    handleStatusChange(todoItem.item,todoItem.isDone)
  }
  render(){
    const {todoItem}=this.props
    const {isDone}=this.props.todoItem
    return (
      <div className="todo-item" onClick={this.handleClick}>
        <span className={isDone?"item-done":"item-todo"}>{todoItem.item}</span>
      </div>
    )
  }
}