import React, { Component } from 'react';
import {Consumer} from './Context';

class Home extends Component  {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      count :0
    }
  }
  handleClick = (count,e) =>{
    this.setState({count: count+1});
  }
  render(){
  return (
    <div className="Home">
      {this.props.name}
      <h4>Hi i am from Home: Class component {this.props.name}</h4>
      {this.state.count}
      <button onKeyPress={(e)=>this.handleClick(this.state.count)}>Click me</button>
      <Consumer>
        {({message,secret,handleClick}) => (
          <React.Fragment>
            <h1>{message}{secret}</h1>
            <button onClick={()=>handleClick(4)}>Click me</button>
          </React.Fragment>
        )}
      </Consumer>
    </div>
  )}
}

export default Home;
