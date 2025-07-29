import { useState } from "react";
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  FormSelect,
} from "react-bootstrap";

const AddComment = (props) => {
  // state = {
  //   comment: ``,
  //   rate: `1`,
  //   elementId: this.props.id,
  // };

  const reviewBook = {
    comment: ``,
    rate: `1`,
    elementId: props.id,
  };

  const [state, setState] = useState(reviewBook);

  const submitReview = (e) => {
    e.preventDefault();
    fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
      method: `POST`,
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYzY3NTc4Y2RkZjAwMTU1ZDY3YTciLCJpYXQiOjE3NTMzNjMzMjIsImV4cCI6MTc1NDU3MjkyMn0.WSMnDyvzkRHVz2Cge5WBKPELT23QjkcZzAY9h2eFlKA",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    })
      .then((response) => {
        if (response.ok) {
          alert("RECENSIONE SALVATA");
          props.toggleTrigger();
        } else {
          throw new Error("Errore nel salvataggio della recensione");
        }
      })
      .catch((err) => {
        console.log("ERRORE", err);
        alert("RECENSIONE NON SALVATA");
      });
  };

  return (
    <>
      <h4>Ti è piaciuto?</h4>
      <Form onSubmit={submitReview}>
        <Form.Group>
          <FormControl
            type="text"
            placeholder="testo"
            value={state.comment}
            onChange={(e) =>
              setState({
                ...state,
                comment: e.target.value,
              })
            }
          />
          <FormSelect
            value={state.rate}
            onChange={(e) =>
              setState({
                ...state,
                rate: e.target.value,
              })
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </FormSelect>
        </Form.Group>
        <FormGroup>
          <Button variant="success" type="submit">
            Salva
          </Button>
        </FormGroup>
      </Form>
    </>
  );
};

export default AddComment;
