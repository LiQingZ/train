import React from 'react'
import './styles.css'

export default class TodoFooter extends React.Component{
  handleClick=(event)=>{
    const {handleTodoFilter}=this.props
    handleTodoFilter(event.target.id)

  }
  render(){
    const {statusArray}=this.props
    return (
      <div>
        {
          statusArray.map((i)=>{
           return <button className={i.isActive?'clicked':'no-click'} id={i.id} key={i.id} onClick={this.handleClick}>{i.btn}</button>
          })
        }
      </div>
    )
  }
}