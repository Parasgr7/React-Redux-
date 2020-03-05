import React, { Component } from 'react';
import { Alert} from 'react-bootstrap';
import {Consumer} from './Context';

class Warning extends Component  {
  constructor(props){
    super(props)
  }
  static contextType = Consumer;

  componentDidUpdate() {
    // Advantage of static contextType: We can now also access Context in the rest of the component
    console.log(this.context.secret)
  }
  handleChange=(click,changeMessage,e)=>{
    changeMessage(e.target.value)
    this.context.handleClick(222)
  }

  render(){
    return(
        <Consumer>
        {({message,secret,handleClick,changeMessage})=>
          (<Alert variant="warning">
            <Alert.Heading>Profile ---> Warning</Alert.Heading>
            <p>
            {message}
            {secret}
              <input name="msamsm" value={message} onChange={(e)=>this.handleChange(handleClick,changeMessage,e)}/>
            </p>
            <hr />
          </Alert>)
        }
        </Consumer>
      )}
}
console.log(Warning.contextType);
export default Warning;
