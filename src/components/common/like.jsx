import React from "react";
import PropTypes from "prop-types";

const Like = (props) => {
  const { liked, onLike } = props;
  const heartClass = liked === true ? "fa fa-heart" : "fa fa-heart-o";
  return (
    <i
      style={{ cursor: "pointer" }}
      onClick={onLike}
      className={heartClass}
      aria-hidden="true"
    ></i>
  );
};

Like.propTypes = {
  liked: PropTypes.bool.isRequired,
  onLike: PropTypes.func.isRequired,
};

export default Like;
