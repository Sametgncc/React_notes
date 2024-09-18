import React, { useEffect, useRef } from "react";
import { Container, FormControl } from "react-bootstrap";

const UseRef = () => {
  const inputUserName = React.useRef(null);

  //! re - render lar da state değerleri korunuyyor 

  const result = useRef(0);

  useEffect(() => {
    const input = inputUserName.current;
    input.focus();
    input.classList.add("bg-success");

    result.current = 5;

    //! UseRef değeri değiştiğinde re-render gerçekleşmez
  }, []);

  return (
    <Container className="mt-4">
      <FormControl ref={inputUserName} />
    </Container>
  );
};
export default UseRef;
