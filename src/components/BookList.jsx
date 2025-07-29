import { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    searchQuery: "",
    selected: false,
    asin: ``,
  };

  getIdBook = (newId) => {
    this.setState(newId);
  };

  selectedBook = (newSelected) => {
    this.setState(newSelected);
  };

  render() {
    return (
      <>
        <Row>
          <Col xs={12} md={6}>
            <Row className="justify-content-center mt-5">
              <Col xs={12} md={4} className="text-center">
                <Form.Group>
                  <Form.Control
                    type="search"
                    placeholder="Cerca un libro"
                    value={this.state.searchQuery}
                    onChange={(e) =>
                      this.setState({ searchQuery: e.target.value })
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="g-2 mt-3">
              {this.props.books
                .filter((b) =>
                  b.title.toLowerCase().includes(this.state.searchQuery)
                )
                .map((b) => (
                  <Col xs={12} md={4} key={b.asin}>
                    <SingleBook
                      book={b}
                      changeId={this.getIdBook}
                      bookSelected={this.state.asin === b.asin}
                      newSelected={this.selectedBook}
                    />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col xs={12} md={6} className="mt-5">
            {this.state.selected && <CommentArea idBook={this.state.asin} />}
          </Col>
        </Row>
      </>
    );
  }
}

export default BookList;
