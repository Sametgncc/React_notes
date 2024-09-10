import React from "react";
import { Container, Row, Col } from "react-bootstrap"; // Row ve Col import edildi
import Product from "./product";
import products from "./products.json";

const ProductList = () => {
    return (
        <Container className="my-5">
            <Row xs={1} sm={2} lg={3} xl={4} className="g-4">
                {products.map((item) => (
                    <Col key={item.id}>
                        <Product {...item} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ProductList;
