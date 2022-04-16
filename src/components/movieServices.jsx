import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import "bootstrap/dist/css/bootstrap.css";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import _ from "lodash";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import SearchBox from "./common/searchBox";

class MovieServices extends Component {
  state = {
    getMovies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    searchQuery: "",
    selectedGenre: null,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ getMovies: getMovies(), genres });
  }

  handleDeleteMovie = (movie) => {
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
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPageData = () => {
    const {
      selectedGenre,
      sortColumn,
      currentPage,
      pageSize,
      searchQuery,
      getMovies: allMovies,
    } = this.state;

    let filtered = allMovies;
    if (searchQuery) {
      filtered = allMovies.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else if (selectedGenre && selectedGenre._id) {
      filtered = allMovies.filter((m) => m.genre._id === selectedGenre._id);
    }

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };

  render() {
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;

    const { totalCount, data: movies } = this.getPageData();

    if (this.state.getMovies.length === 0)
      return <p>There are no movies in the Database</p>;

    return (
      <React.Fragment>
        <Outlet />
        <div className="p-4 row">
          <div className="col-2">
            <ListGroup
              items={this.state.genres}
              selectedItem={this.state.selectedGenre}
              onItemSelect={this.handleGenreSelect}
            />
          </div>
          <div className="col">
            <div>
              <SearchBox value={searchQuery} onChange={this.handleSearch} />
            </div>
            <div>
              <Link className="btn btn-primary m-3" to="/movies/new">
                New Movie
              </Link>
            </div>
            <span>Showing {totalCount} movies in the database</span>
            <div>
              <button onClick={this.handleReset} className="btn btn-primary">
                Reset
              </button>
            </div>
            <MoviesTable
              movies={movies}
              sortColumn={sortColumn}
              onLike={this.handleLike}
              onDelete={this.handleDeleteMovie}
              onSort={this.handleSort}
            />

            <Pagination
              itemsCount={totalCount}
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
