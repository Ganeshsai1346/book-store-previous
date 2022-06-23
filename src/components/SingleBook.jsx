/** @format */
import { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

class SingleBook extends Component {
  render() {
    return (
      <Container className="bg">
        <Row>
          <Col className="mb-5 ">
            <Card id="card">
              <Card.Img id="cardImg" variant="top" src={this.props.book.img} />
              <Card.Body>
                <Card.Title className="card-title">
                  {this.props.book.title}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SingleBook;

/* const SingleBook = (props) => (
  <Container className="bg">
    <h1 className="text-center text-light mb-4">{props.category} Books</h1>
    <Row>
      <Col className="mb-5 ">
        <Card id="card">
          <Card.Img id="cardImg" variant="top" src={props.book.img} />
          <Card.Body>
            <Card.Title className="card-title">{props.book.title}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default SingleBook; */
