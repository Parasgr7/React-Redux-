import React,{Component} from 'react';
import { Alert,Row,Col,Button } from 'react-bootstrap';
import {connect} from 'react-redux';
import axios from 'axios';


class Api extends Component  {
  handleClick=()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{
      console.log(response);
    })
    .catch((err)=>{

    })

  }
  render(){
  return (
      <div className="container-fluid">
        <Row>
          <Col>
            <Alert variant="success">
              <Alert.Heading>I will fetch 100 Posts!</Alert.Heading>
              <p>
                Stay Calm!!
              </p>
              <hr />
              <p className="mb-0">
                  <Button variant="primary" onClick={()=> this.handleClick()}>Fetch Posts</Button>
              </p>
            </Alert>
          </Col>
        </Row>
    </div>
  )};
}
const mapDispatchToProps=(dispatch)=>{
  return{
    fetch_posts:()=> { dispatch({type: 'FETCH_API'}) }
  }
}

export default connect(null,mapDispatchToProps)(Api);
