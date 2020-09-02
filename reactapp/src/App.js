import React from "react";
import Car from "./Car";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Car />
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList title=" Category Items" />
          </Col>
          <Col xs="9">
            <ProductList title=" Product Items" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default App;
