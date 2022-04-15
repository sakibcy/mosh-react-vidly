import { useNavigate, useLocation, useParams } from "react-router-dom";

export function NavigateToMovies() {
  let navigate = useNavigate();
  let location = useLocation();

  return navigate("/movies" + location.search);
}

export function NavigateToNotFound() {
  let navigate = useNavigate();
  let location = useLocation();

  return navigate("/not-found" + location.search);
}

export function ReturnId() {
  let { id } = useParams();
  return id;
}
