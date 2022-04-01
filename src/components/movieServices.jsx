import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import "bootstrap/dist/css/bootstrap.css";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";

class MovieServices extends Component {
  state = {
    getMovies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    selectedItem: [],
  };

  componentDidMount() {
    this.setState({ getMovies: getMovies(), genres: getGenres() });
  }

  deleteMovie = (movie) => {
    const movies = this.state.getMovies.filter((m) => m._id !== movie._id);
    this.setState({ getMovies: movies });
  };

  handleReset = () => {
    const getMovie = getMovies();
    this.setState({ getMovies: getMovie });
  };

  handleLike = (movie) => {
    const get_Movies = [...this.state.getMovies];
    const index = get_Movies.indexOf(movie);
    get_Movies[index] = { ...movie };
    get_Movies[index].liked = true;
    this.setState({ getMovies: get_Movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre });
  };

  render() {
    const { pageSize, currentPage, getMovies: allMovies } = this.state;

    if (this.state.getMovies.length === 0)
      return <p>There are no movies in the Database</p>;

    const movies = paginate(allMovies, currentPage, pageSize);

    return (
      <React.Fragment>
        <div className="p-4 row">
          <div className="col-2">
            <ListGroup
              items={this.state.genres}
              selectedItem={this.state.selectedGenre}
              onItemSelect={this.handleGenreSelect}
            />
          </div>
          <div className="col">
            <span>
              Showing {this.state.getMovies.length} movies in the database
            </span>
            <div>
              <button onClick={this.handleReset} className="btn btn-primary">
                Reset
              </button>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Genre</th>
                  <th>Stock</th>
                  <th>Rate</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {movies.map((movie) => (
                  <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>
                      <Like
                        onClick={() => this.handleLike(movie)}
                        liked={movie.liked}
                      />
                    </td>
                    <td>
                      <button
                        onClick={() => this.deleteMovie(movie)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <Pagination
              itemsCount={this.state.getMovies.length}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
              currentPage={currentPage}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MovieServices;
