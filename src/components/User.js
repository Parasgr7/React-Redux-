import React,{useState} from 'react';
import { Alert,Row,Col } from 'react-bootstrap';

function User() {
  const [message, setMessage]= useState( 'Paras' );
  const handleChange = event => setMessage(event.target.value);
  return (
    <div className="container-fluid">
    <Row>
      <Col>
        <div className="User">
          <h3>Hi i am from User functional component</h3>
          <h2>Master Component</h2>
          <form>
            <input name="name" value={message} onChange={handleChange}/>
            {message}
          </form>
        </div>
      </Col>
    </Row>
    <Row>
      <Col>
        <Alert variant="danger">
          <Alert.Heading>Hey, nice to see you {message}</Alert.Heading>
          <p>
            Aww yeah, you successfully read this important alert message. This example
            text is going to run a bit longer so that you can see how spacing within an
            alert works with this kind of content.
          </p>
          <hr />
          <p className="mb-0">
            Whenever you need to, be sure to use margin utilities to keep things nice
            and tidy.
          </p>
        </Alert>
      </Col>
      <Col>
        <Alert variant="success">
          <Alert.Heading>Hey, nice to see you</Alert.Heading>
          <p>
            Aww yeah, you successfully read this important alert message. This example
            text is going to run a bit longer so that you can see how spacing within an
            alert works with this kind of content.
          </p>
          <hr />
          <p className="mb-0">
            Whenever you need to, be sure to use margin utilities to keep things nice
            and tidy.
          </p>
        </Alert>
      </Col>
      <Col>
        <Alert variant="danger">
          <Alert.Heading>Hey, nice to see you</Alert.Heading>
          <p>
            Aww yeah, you successfully read this important alert message. This example
            text is going to run a bit longer so that you can see how spacing within an
            alert works with this kind of content.
          </p>
          <hr />
          <p className="mb-0">
            Whenever you need to, be sure to use margin utilities to keep things nice
            and tidy.
          </p>
        </Alert>
      </Col>
    </Row>
  </div>
  );
}

export {User};
