import React,{Component} from 'react';
import { Alert,Row,Col,Button } from 'react-bootstrap';
import {
  Link,
} from "react-router-dom";

class Card extends Component  {
  render(){
  return (
      <div className="container-fluid">
        <Row>
          <Col>
            <Alert variant="danger">
              <Alert.Heading>{this.props.post.title}!</Alert.Heading>
              <p>
                {this.props.post.body}
              </p>
              <hr />
              <p>
                User_ID: {this.props.post.userId}
              </p>
              <p className="mb-0">
                <Link to={"/users/"+this.props.post.id}>
                  <Button variant="primary">Click me</Button>
                </Link>
              </p>
            </Alert>
          </Col>
        </Row>
    </div>
  )};
}

export default Card;
