import React from 'react'
import TodoList from '../todo-list'
import TodoFooter from '../todo-footer'
import './styles.css'

export default class TodoInput extends React.Component{
  state={
    inputList:[],
    inputItem:'',
    filterList:[],
    statusArray:[
      {'btn':'All',id:0,'isActive':''},{'btn':'active',id:1,'isActive':''},{'btn':'done',id:2,'isActive':''}
    ]
  }
  handleTodoInput=(event)=>{
    const input=event.target.value
    console.log('input',input)
    this.setState({
      inputItem:input
    })
  }
  handleKeyUp=(event)=>{
    const {inputItem,inputList}=this.state
    if(event.keyCode===13&&inputItem!==""){
      inputList.push({"item":inputItem,"isDone":false})
    }
    this.setState({
      inputList,
      filterList:inputList
    })
  }
  statusChange=(item,isDone)=>{
    const {inputList}=this.state
    const checkItem=inputList.findIndex((i)=>{
      return i.item===item
    })
    inputList[checkItem].isDone=!isDone
    this.setState({
      inputList
    })
  }
  handleTodoFilter=(id)=>{
    const {inputList,filterList,statusArray}=this.state
    for(let i=0;i<statusArray.length;i++){
      if(statusArray[i].id==id){
         statusArray[i].isActive=true
      }else{
        statusArray[i].isActive=false
      }
    }
    this.setState({
      statusArray
    })
    switch(id){
      case "0": this.setState({
        filterList:inputList
      });break;
      case "1":const activeList=inputList.filter((i)=>{
             return i.isDone!==true
          })
          this.setState({
            filterList:activeList
          });break;
      case "2":const doneList= inputList.filter((i)=>{
          return i.isDone==true
        })
        this.setState({
          filterList:doneList
        });break;
    }
  }
  render(){
    const {inputItem,inputList,filterList,statusArray}=this.state
    return (
      <div>
        <input 
         className="todo-input" 
         name="todoInput" 
         type="text"
         value={this.state.inputItem} 
         onChange={this.handleTodoInput}
         onKeyUp={this.handleKeyUp}
         />
        <TodoList todoList={filterList} statusChange={this.statusChange}/>
        <TodoFooter statusArray={statusArray} handleTodoFilter={this.handleTodoFilter}/>
      </div>
    )
  }
}