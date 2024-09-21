import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { TfiMinus, TfiPlus } from "react-icons/tfi";

const Child = ({ handleCounter }) => {
  return (
    <div>
      <ButtonGroup>
        <Button
          variant="danger "
          onClick={() => handleCounter(-1)}
        >
          {" "}
          <TfiMinus />{" "}
        </Button>
        <Button variant="info " onClick={() => handleCounter(1)}>
          {" "}
          <TfiPlus />{" "}
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Child;
