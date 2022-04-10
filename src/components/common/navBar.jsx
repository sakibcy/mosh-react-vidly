import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

const NavBar = () => {
    return ( 
        <div className=''>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand" to="/">Vidly</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <Link class="nav-item nav-link active" to="/movies">Movies <span class="sr-only">(current)</span></Link>
      <Link class="nav-item nav-link" to="/customers">Customers</Link>
      <Link class="nav-item nav-link" to="/rentals">Rentals</Link>
      <Outlet/>
    </div>
  </div>
</nav>
        </div>
     );
}
 
export default NavBar;