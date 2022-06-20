import React, { Component } from "react";

class Like extends Component {
  state = {};
  render() {
    const { liked, onClick } = this.props;
    const heartClass = liked === true ? "fa fa-heart" : "fa fa-heart-o";
    return (
      <i
        style={{ cursor: "pointer" }}
        onClick={onClick}
        class={heartClass}
        aria-hidden="true"
      ></i>
    );
  }
}

export default Like;
