import Like from "./common/like";
import React, {Component} from "react";
import Table from "./common/table";

class MoviesTable extends Component {
  columns = [
    {path: 'title', label: 'Title'},
    {path: 'genre.name', label: 'Genre'},
    {path: 'numberInStock', label: 'Stock'},
    {path: 'dailyRentalRate', label: 'Rate'},
    {key: 'like', content: movie => <Like onClick={() => this.props.onLike(movie)} liked={movie.liked} />},
    {key: 'delete', content: movie => <button onClick={() => this.props.onDelete(movie)} className="btn btn-danger">Delete</button>},
  ];
   
  render() { 
    const {movies, onSort, sortColumn}= this.props;

    return ( 
    <Table columns={this.columns} onSort={onSort} sortColumn={sortColumn} data={movies} />
  
  );
  }
}
 
 
export default MoviesTable;