import React, { Component } from 'react';
import {Jumbotron,Button } from 'react-bootstrap';


class Guest extends Component  {
  constructor(props){
    super(props)
    console.log('from constructor');

    this.handleClick = this.handleClick.bind(this);
    this.state = {
      count :0
    }
  }
  handleClick = (count,e) =>{
    if (e.key==='a')
    {this.setState({count: count+1})}
    else if (e.key==='b') {
      this.setState({count: count-1})
    }
  }
  render(){
  return (
    <div class="container-fluid">
    <Jumbotron>
    <h1>Hello, Guest!</h1>
    <p>
      This is a simple hero unit, a simple jumbotron-style component for calling
      extra attention to featured content or information.
    </p>
    <p>
      <Button variant="primary">Learn more</Button>
    </p>
  </Jumbotron>
  </div>
  )}
}

export default Guest;
