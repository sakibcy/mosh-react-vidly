import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/common/navBar";
import NotFound from "./components/common/notFound";
import Customers from "./components/customers";
import LoginForm from "./components/loginForm";
import MovieServices from "./components/movieServices";
import MovieServicesDetails from "./components/movieServicesDetails";
import Rentals from "./components/rentals";
import RegisterForm from "./components/registerForm";
import MovieForm from "./components/movieForm";

const App = () => {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Navigate to="/movies" />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="register" element={<RegisterForm />} />

        <Route path="movies" element={<MovieServices />} />
        <Route path="movies/:id" element={<MovieServicesDetails />} />
        <Route path="movies/new" element={<MovieForm />} />

        <Route path="customers" element={<Customers />} />
        <Route path="rentals" element={<Rentals />} />
        <Route path="not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </div>
  );
};

export default App;
