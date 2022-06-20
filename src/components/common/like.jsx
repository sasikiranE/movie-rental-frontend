import React from "react";

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

export default Like;
