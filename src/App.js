import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/common/navBar";
import NotFound from "./components/common/notFound";
import Customers from "./components/customers";
import MovieServices from "./components/movieServices";
import MovieServicesDetails from "./components/movieServicesDetails";
import Rentals from "./components/rentals";

const App = () => {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Navigate to="/movies" />} />
        <Route path="movies" element={<MovieServices />} />
        <Route path="movies/:id" element={<MovieServicesDetails />} />
        <Route path="customers" element={<Customers />} />
        <Route path="rentals" element={<Rentals />} />
        <Route path="not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </div>
  );
};

export default App;
