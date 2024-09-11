import React, { useState } from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import { TfiMinus, TfiPlus, TfiReload } from "react-icons/tfi";

const Counter1 = () => {

  const [count, setCount] = useState(0);




  return (
    <Container className="my-5">
      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary" onClick={() => setCount(0)}>
          <TfiReload></TfiReload>
        </Button>
        <Button variant="danger" onClick={() => setCount((prev) => prev - 1)}>
          <TfiMinus></TfiMinus>
        </Button>
        <Button variant="secondary" disabled>
          {count}
        </Button>
        <Button variant="danger" onClick={() => setCount((prev) => prev + 1)}>
          <TfiPlus></TfiPlus>
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default Counter1;
