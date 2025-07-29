import { Card } from "react-bootstrap";
// import CommentArea from "./CommentArea";

const SingleBook = (props) => {
  // state = {
  //   selected: false,
  // };

  return (
    <>
      <Card
        onClick={() => {
          props.changeId(props.book.asin);
          props.newSelected(!props.bookSelected);
        }}
        style={{ border: props.bookSelected ? "3px solid red" : "none" }}
      >
        <Card.Img variant="top" src={props.book.img} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{props.book.title}</Card.Title>
        </Card.Body>
      </Card>

      {/* {this.state.selected && <CommentArea idBook={this.props.book.asin} />} */}
    </>
  );
};

export default SingleBook;
