import React from "react";
import { Button, Container } from "react-bootstrap";

const Stateless = () => {
  let classes = "bg-dark text-light ";

  // ! Bu yapıda classes değişkenin değer i değişse de
  // ! componenet re-render olmadığı sürece  kullanıcıya 
  // ! değişiklik yansımaz

  const handleClick = (mode) => {
    if (mode === "dark") {
      classes = "bg-dark text-light";
    } else {
      classes = "bg-light text-dark";
    }
  };

  return (
    <Container className={`${classes} py-5`}>
      <h1>Dark/Light Mode </h1>
      <div className="d-flex gap-3 mt-4">
        <Button onClick={() => handleClick("dark")}>Dark Mode</Button>
        <Button onClick={() => handleClick("light")}>Light Mode</Button>
      </div>
    </Container>
  );
};

export default Stateless;
