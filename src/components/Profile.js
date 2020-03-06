import React, { Component } from 'react';
import { Alert,Container,Row,Jumbotron,Button,Col } from 'react-bootstrap';
import Warning from '../components/Warning';
import Home from './Home';
import {User} from './User';
import {Provider} from './Context';
import Post from './Post';
import {connect} from 'react-redux';
import Guest from './Guest.js'
import Card from './Card.js'

class Profile extends Component  {
  constructor(props){
    super(props)
    this.state= {
      message: 'Paras',
      secret: 'XYAS',
      count: 1,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange=(e)=>{
    this.setState({message: e.target.value})
  }

  handleClick=(num)=>{
    this.setState({count: this.state.count+num})
  }
  changeMessage=(message)=>{
    this.setState({message: message})
  }

  render(){
    console.log(this.props);
    const message = this.state.message;
    const contextMesasge = {message: message, secret: this.state.count, handleClick: this.handleClick,changeMessage: this.changeMessage};
  return (
    <div className="container-fluid">
    <Row>
      <Col>
        <div className="profile">
          <h3>Profile </h3>
          <h2>Master Component</h2>
          <form>
          {this.state.count}
            <input name="name" value={message} onChange={this.handleChange}/>
            {message}
          </form>
        </div>
      </Col>
    </Row>
    <Row>
      <Col>
        <Provider value={contextMesasge}>
          <Warning/>
          <Alert variant="success">
            <Home name={this.state.secret}/>
          </Alert>
        </Provider>
      </Col>
      <Col>
        <Alert variant="danger">
        <Post />
        </Alert>
      </Col>
      <Col>
        <Alert variant="info">
          <Guest post={this.props.post ? this.props.post: {id: 1, name: "First class", description: "new one out"}}/>
        </Alert>
      </Col>
    </Row>
  </div>
  )}
}

const mapStateToProps=(state,ownProps)=>{
  let id = ownProps.match.params.user_id;
  return{
    post: state.posts.find(post=> post.id==id)
  }
}
export default connect(mapStateToProps)(Profile);
