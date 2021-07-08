import "./App.css";
import React, { Component } from "react";
import { getMovies } from "./services/fakeMovieSearch";

class Movies extends Component {
  state = {
    Movies: getMovies(),
  };
  constructor() {
    super();
    //binding this to that handleDelete method
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(movie) {
    //the logic to delete that particular list element is to take that out from the list to achieve that we use .filter method
    console.log(movie);
    const movies = this.state.Movies.filter(
      (movieitem) => movie._id !== movieitem._id
    );
    this.setState({ Movies: movies });
  }
  render() {
    if (this.state.Movies.length < 1) {
      return (
        <div className="container">
          <h4>No more movies in the database.</h4>
        </div>
      );
    }
    return (
      <div className="container">
        <h4>Showing {this.state.Movies.length} movies in the database.</h4>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.Movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
