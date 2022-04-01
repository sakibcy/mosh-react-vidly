import React, { Component } from 'react';
import './App.css';
import MovieServices from './components/movieServices';
import { getMovies } from './services/fakeMovieService';

class App extends Component {
  render() {
    return (
      <MovieServices />
    );
  }
}

export default App;
