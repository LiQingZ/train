import React from 'react'
import {  Route, Link } from "react-router-dom"
import TopicSon from './topic-son'

export default class Topic extends React.Component{
  
  render(){
    const {match}=this.props
    return (
      <div>
      <Route exact path={`${match.url}`} render={()=>(<h1>Topic</h1>)}/>
      <ul>
          <li>
            <Link to={`${match.url}/topicson`}>Topicson</Link>
          </li>
       </ul>
      {/* {this.props.children||'hello'} */}
      {/* <Route path="topicson" component={TopicSon}/> */}
      <Route path={`${match.url}/topicson`} component={TopicSon}/>
     

      </div>
    )
  }
}