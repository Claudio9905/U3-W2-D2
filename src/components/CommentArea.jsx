import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { useEffect, useState } from "react";

const CommentArea = (props) => {
  // state = {
  //   arrayCommentsBook: [],
  // };

  const [arrayCommentsBook, setArrayCommentsBook] = useState([]);
  const [trigger, setTrigger] = useState(false);

  const toggleTrigger = () => {
    setTrigger(!trigger);
  };

  useEffect(() => {
    console.log("Recupero i commenti");
    getReviews();
  }, [props.idBook, trigger]);

  const getReviews = () => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/comments/` + props.idBook,
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
        // this.setState({ arrayCommentsBook: resData });
        setArrayCommentsBook(resData);
      })
      .catch((err) => {
        console.log("ERRORE: ", err);
      });
  };

  // componentDidMount() {
  //   getReviews();
  // }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.idBook != props.idBook) {
  //     getReviews();
  //   }
  // }

  return (
    <>
      <CommentList recensioni={arrayCommentsBook} />
      <AddComment id={props.idBook} toggleTrigger={toggleTrigger} />
    </>
  );
};

export default CommentArea;
