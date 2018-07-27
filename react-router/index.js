import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Home from './home'
import About from './about'
import Topic from './topic'


export default class App extends React.Component{
  render(){
    return (
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topic">Topic</Link>
          </li>
        </ul>
        <hr />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topic" component={Topic} >
          {/* <Route path="/topicson" component={TopicSon}/> */}
        </Route>
      </div>
    </Router>
  )
  }
}