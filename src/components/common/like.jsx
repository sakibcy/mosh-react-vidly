import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";

const Like = (props) => {
  let liking;
  if (props.liked === false) liking = regularHeart;
  else liking = solidHeart;

  return (
    <FontAwesomeIcon
      style={{ cursor: "pointer" }}
      onClick={props.onClick}
      icon={liking}
    />
  );
};

export default Like;
