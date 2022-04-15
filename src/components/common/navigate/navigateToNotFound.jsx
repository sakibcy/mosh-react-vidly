import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NavigateToNotFound = () => {
  let navigate = useNavigate();
  let location = useLocation();

  return navigate("/not-found" + location.search);
};

export default NavigateToNotFound;
