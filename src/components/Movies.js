import React from "react";
import { movies } from "../data";

function Movies() {
  const Movielist = movies.map((item) => (
    <div key={item.title}>
      <h2>{item.title}</h2>
      <p>Runtime: {item.time} min.</p>
      <ul>
        {item.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  ))
  return (
   <div>
  <h1>Movies Page</h1>
  {Movielist}
  </div>
  );
}

export default Movies;
