import React, { Component } from 'react';
import {Jumbotron,Button } from 'react-bootstrap';
import {connect} from 'react-redux';


class Guest extends Component  {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick = (id) =>{
    this.props.delete(id)
  }
  render(){
  return (
    <div className="container-fluid">
    <Jumbotron>
    <h1>{this.props.post.title}!</h1>
    <p>
      {this.props.post.body}
    </p>
    <p>
      User_ID: {this.props.post.userId}
    </p>
    <p>
      <Button variant="danger" onClick={() => this.handleClick(this.props.post.id)}>Delete</Button>
    </p>
  </Jumbotron>
  </div>
  )}
}

const mapDispatchToProps=(dispatch)=>{
  return{
    delete: (id) =>{ dispatch({type: 'DELETE', id: id}) }
  }
}

export default connect(null,mapDispatchToProps)(Guest);
