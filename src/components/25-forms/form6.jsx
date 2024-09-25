import { useFormik } from "formik";
import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import * as Yup from "yup";
const Form6 = () => {
  const initalValues = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(3, "Too short")
      .max(15, "Too long")
      .required("Requierd"),

    lastName: Yup.string()
      .min(3, "Too short")
      .max(15, "Too long")
      .required("Requierd"),

    email: Yup.string().email("Invalid email").required("Requierd"),
  });

  const ouSubmit = (values) => {};

  const formik = useFormik({
    initialValues: initalValues,
    validationSchema: validationSchema,
    onSubmit: ouSubmit,
  });

  return (
    <Container className="mt-3">
      <Form noValidate onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            name="firstName"
            type="text"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            isInvalid = {!!formik.errors.firstName}
          />
          <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control name="lastName" type="text" />
          <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="phoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control name="phoneNumber" type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control name="email" type="text" />
          <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control name="address" type="text" as="textarea" rows={3} />
          <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
    </Container>
  );
};

export default Form6;
