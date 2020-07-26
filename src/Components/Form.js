import React from "react";

import { Form, Button } from "react-bootstrap";

export default class Forms extends React.Component {
  render() {
    return (
      <Form inline >
        <Form.Control placeholder="City..." key="city" onChange={this.props.valueHandler} />
        <Button onClick={this.props.weatherMethod}>Enter</Button>
      </Form>
    );
  }
}
