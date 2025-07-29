import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    arrayCommentsBook: [],
  };

  getReviews = () => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/comments/` +
        this.props.idBook,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYzY3NTc4Y2RkZjAwMTU1ZDY3YTciLCJpYXQiOjE3NTMzNjMzMjIsImV4cCI6MTc1NDU3MjkyMn0.WSMnDyvzkRHVz2Cge5WBKPELT23QjkcZzAY9h2eFlKA",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("ERRORE nella response");
        }
      })
      .then((resData) => {
        console.log(resData);
        this.setState({ arrayCommentsBook: resData });
      })
      .catch((err) => {
        console.log("ERRORE: ", err);
      });
  };

  componentDidMount() {
    this.getReviews();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.idBook != this.props.idBook) {
      this.getReviews();
    }
  }

  render() {
    return (
      <>
        <CommentList recensioni={this.state.arrayCommentsBook} />
        <AddComment id={this.props.idBook} />
      </>
    );
  }
}

export default CommentArea;
