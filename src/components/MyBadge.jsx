/** @format */

import { Component } from "react";
import { Badge } from "react-bootstrap";

class MyBadge extends Component {
  render() {
    return (
      <div>
        <h1 className="text-light">
          All Books Available{" "}
          <Badge variant={this.props.color}>{this.props.text}</Badge>
          {""}
        </h1>
      </div>
    );
  }
}

export default MyBadge;
