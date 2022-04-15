import React from "react";
import { useParams } from "react-router-dom";

const ReturnId = () => {
  let { id } = useParams();

  return id;
};

export default ReturnId;
