/** @format */

import { Component } from "react";
import SingleComment from "./SingleComment";

class CommentList extends Component {
  render() {
    return (
      this.props.commentsArray &&
      this.props.commentsArray.map((comment) => (
        <SingleComment bookComments={comment} />
      ))
    );
  }
}

export default CommentList;
