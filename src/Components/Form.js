import React, { Component } from "react";

// import { Form, Button } from "react-bootstrap";

export default class Forms extends Component {
  render() {
    return (
      //   <Form inline>
      //     <Form.Control placeholder="City..." id="city"/>
      //     <Button onClick={this.props.weatherMethod}>Enter</Button>
      //   </Form>

      <form onSubmit={this.props.weatherMethod}>
        <input type="text" name="city" placeholder="City" />
        <button>Enter</button>
      </form>
    );
  }
}
