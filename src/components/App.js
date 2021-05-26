import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    console.log("hey");
    store.subscribe(() => {
      // console.log("updated");
      this.forceUpdate();
    });
    store.dispatch({
      type: "ADD_MOVIES",
      movies: data,
    });
    // console.log("state => ", this.props.store.getState().movies);
  }
  render() {
    const movies = this.props.store.getState().movies;
    // console.log("render");
    // console.log(movies);
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
          <div className="list">
            {movies.map((movie, index) => (
              <MovieCard movie={movie} key={`{movies-${index}}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
