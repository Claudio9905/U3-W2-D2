import ListGroup from "react-bootstrap/ListGroup";

const CommentList = (props) => {
  return (
    <>
      {props.recensioni.map((recens) => {
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
};

export default CommentList;
