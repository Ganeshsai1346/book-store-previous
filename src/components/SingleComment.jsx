/** @format */

import { Component } from "react";

class SingleComment extends Component {
  render() {
    return <li>{this.props.bookComments.comment}</li>;
  }
}
export default SingleComment;
