import React from 'react'
import TodoItem from '../todo-item'
export default class TodoList extends React.Component{
  handleStatusChange=(item,isDone)=>{
    const {statusChange}=this.props
    statusChange(item,isDone)
  }
  render(){
    const {todoList}=this.props
    return (
      todoList.map((item)=><TodoItem key={item.id} todoItem={item} handleStatusChange={this.handleStatusChange}/>)
    )
  }
}