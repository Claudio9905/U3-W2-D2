import { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";

class CommentList extends Component {
  render() {
    return (
      <>
        {this.props.recensioni.map((recens) => {
          return (
            <ListGroup key={recens._id}>
              <ListGroup.Item>
                {recens.rate}-{recens.comment}
              </ListGroup.Item>
            </ListGroup>
          );
        })}
      </>
    );
  }
}

export default CommentList;
