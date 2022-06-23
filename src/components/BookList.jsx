/** @format */

import { Component } from "react";
import SingleBook from "./SingleBook";
import { Container, Row, Col, Form } from "react-bootstrap";

class BookList extends Component {
  state = {
    searchQuery: "",
  };
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Type the book name"
                value={this.state.searchQuery}
                onChange={(e) => {
                  this.setState({ searchQuery: e.target.value });
                }}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          {this.props.books
            .filter((oneBook) => oneBook.title.includes(this.state.searchQuery))
            .map((oneBook) => (
              <Col
                key={oneBook.asin}
                xs={12}
                sm={6}
                md={4}
                lg={2}
                className="mb-5">
                <SingleBook book={oneBook} />
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
