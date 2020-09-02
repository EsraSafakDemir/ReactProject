import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

class ProductList extends Component {
  constructor(props) {
    super(props);

    state: {
    }
  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <ListGroup>
          <ListGroupItem color="success">Cras justo odio</ListGroupItem>
          <ListGroupItem color="info">Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem color="warning">Morbi leo risus</ListGroupItem>
          <ListGroupItem color="danger">Porta ac consectetur ac</ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}
export default ProductList;
