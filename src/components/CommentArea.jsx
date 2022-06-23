/** @format */

import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  componentDidMount = () => {
    this.fetchComments();
  };
  fetchComments = async () => {
    try {
      const url = "https://striveschool-api.herokuapp.com/api/comments/";

      const response = await fetch(url, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzM2RmMDdmZmQ0OTAwMTU4YTdhOWEiLCJpYXQiOjE2NTU5ODQ3NTAsImV4cCI6MTY1NzE5NDM1MH0.eq4eTFEZTokG0XppZERDfyrOXMSWXsviQ2Is8_YCqN4",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        this.setState({
          comments: data,
        });
      } else {
        alert("Something is Wrong!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <ListGroup>
        {this.state.comments.map((comment) => (
          <ListGroup.Item key={comment._id}>{comment.comment}</ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
}

export default CommentArea;
