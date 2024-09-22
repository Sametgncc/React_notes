import React, { useState } from "react";
import { Container, FormControl } from "react-bootstrap";

const Form1 = () => {
  const [email, setEmail] = useState("samet@gmail.com");

  return (
    <Container className="my-3">
      <h5>{email}</h5>

      <FormControl
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <FormControl className="my-3" defaultValue='John'/>
    </Container>
  );
};

export default Form1;
