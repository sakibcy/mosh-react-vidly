import Like from "./common/like";
import React, {Component} from "react";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";

class MoviesTable extends Component {
  columns = [
    {path: 'title', label: 'Title'},
    {path: 'genre.name', label: 'Genre'},
    {path: 'numberInStock', label: 'Stock'},
    {path: 'dailyRentalRate', label: 'Rate'},
    {key: 'like'},
    {key: 'delete'},
  ];
   
  render() { 
    const {movies, onLike, onDelete, onSort, sortColumn}= this.props;

    return ( 
    <table className="table">
    <TableHeader 
    columns={this.columns}
    onSort={onSort}
    sortColumn={sortColumn}
    />
    <TableBody data={movies} columns={this.columns} />
    <tbody>
      {movies.map((movie) => (
        <tr key={movie._id}>
          <td>{movie.title}</td>
          <td>{movie.genre.name}</td>
          <td>{movie.numberInStock}</td>
          <td>{movie.dailyRentalRate}</td>
          <td>
            <Like
              onClick={() => onLike(movie)}
              liked={movie.liked}
            />
          </td>
          <td>
            <button
              onClick={() => onDelete(movie)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table> );
  }
}
 
 
export default MoviesTable;