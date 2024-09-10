import React from "react";
import { Button, Container } from "react-bootstrap";

const Event2 = () => {
  const handleClick = (name) => {
    alert(`Hello ${name}`);
  };

  // !Eger event handler a parametre gonderilecekse mutlaka event listener icinde araci bir fonksiyon (callback) kullanilmalidir onClick={() => handleClick("Suzanne")}

	// !callback kullanilmazsa => onClick={handleClick("Suzanne")}
	// !handleClick fonksiyonu hemen cagrilir

  return (
    <Container className="mt-5">
      <h1> Event2</h1>
      <Button variant="info" id="btn" onClick={() => handleClick("Samet")}>
        Click Me
      </Button>
    </Container>
  );
};

export default Event2;
