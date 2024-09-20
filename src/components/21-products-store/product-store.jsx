import React, { useEffect, useState, useSyncExternalStore } from "react";
import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";

const ProductStore = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">ProudctStore</h1>

      <Row xs={1} sm={2} md={3} lg={4}>
        {products.map((item) => (
          <Col key={item.id}>
            <Card className="h-100">
              <Card.Body>
                <Card.Img
                  variant="top"
                  src={item.thumbnail}
                  style={{
                    width: "80%",
                    display: "block",
                    margin: " auto",
                  }}
                />

                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>

              <Badge className="bg-warning text-dark position-absolute top-0 start-0 m-3 fs-5">
                ${item.price}{" "}
              </Badge>
              <Badge className="bg-info text-dark position-absolute top-0 end-0 m-3 ">
                {item.availabilityStatus}{" "}
              </Badge>


              <Card.Footer className="bg-transparent border-0">
                <Button variant="primary" className="w-100">
                  Add to cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductStore;
