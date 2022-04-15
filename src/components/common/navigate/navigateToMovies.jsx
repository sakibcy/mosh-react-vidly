import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NavigateToMovies = () => {
  let navigate = useNavigate();
  let location = useLocation();

  return navigate("/movies" + location.search);
};

export default NavigateToMovies;
