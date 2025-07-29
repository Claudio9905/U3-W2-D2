import { useState } from "react";
import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";

const BookList = (props) => {
  // state = {
  //   searchQuery: "",
  //   selected: false,
  //   asin: ``,
  // };

  const [searchQuery, setSearchQuery] = useState("");
  const [selected, setSelected] = useState(false);
  const [asin, setAsin] = useState(``);

  const getIdBook = (newId) => {
    setAsin(newId);
  };

  const selectedBook = (newSelected) => {
    setSelected(newSelected);
  };

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
                  value={searchQuery}
                  onChange={(e) =>
                    // this.setState({ searchQuery: e.target.value })
                    setSearchQuery(e.target.value)
                  }
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="g-2 mt-3">
            {props.books
              .filter((b) => b.title.toLowerCase().includes(searchQuery))
              .map((b) => (
                <Col xs={12} md={4} key={b.asin}>
                  <SingleBook
                    book={b}
                    changeId={getIdBook}
                    bookSelected={asin === b.asin}
                    newSelected={selectedBook}
                  />
                </Col>
              ))}
          </Row>
        </Col>
        <Col xs={12} md={6} className="mt-5">
          {selected && <CommentArea idBook={asin} />}
        </Col>
      </Row>
    </>
  );
};

export default BookList;
