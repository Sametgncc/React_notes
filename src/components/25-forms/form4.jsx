import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const Form4 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    address: "",
  });

  console.log(formData);
  const handleSubmit = (e) => {
    // 1- Formun default davranısını engeller
    e.preventDefault();

    // 2- form valitation islemi yapabilir

    if (!firstName || !lastName || !phoneNumber || !email || !address) {
      alert("Please fill out all fields");
      return;
    }

    // 3- Api ye gonderilacak paylod olusturulur
    const payload = {
      firstName,
      lastName,
      phoneNumber,
      email,
      address,
    };

    // 4- Apiye istek atılır
    alert("form submitted successfully");
  };

  const handleChange = (e) => {
    const {name , value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));  
  }

  return (
    <Container className="mt-3">
      <Form>
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            value={formData.lastName}
            onChange={handleChange}

          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="phoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            value={formData.phoneNumber}
            onChange={handleChange}

          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            value={formData.email}
            onChange={handleChange}

          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="address">
          <Form.Label>Addrass</Form.Label>
          <Form.Control
            type="text"
            value={formData.address}
            onChange={handleChange}

            as="textarea"
            rows={3}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
    </Container>
  );
};

export default Form4;
