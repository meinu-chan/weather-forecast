import React from "react";

import { Form, Button } from "react-bootstrap";

const Forms = (props) => {
  return (
    <Form inline>
      <Form.Control
        placeholder="City..."
        key="city"
        onChange={props.valueHandler}
      />
      <Button onClick={props.weatherMethod} variant="outline-dark">
        Enter
      </Button>
    </Form>
  );
};

export default Forms;