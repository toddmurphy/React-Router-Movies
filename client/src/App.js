import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      {/* <Route exact path="/" component={MovieList} />
      <Route exact path="/movies/:id" component={Movie} /> */}
      <Route exact path="/" render={props => <MovieList {...props} />} />
      <Route exact path="/movies/:id" render={props => <Movie {...props} />} />
      {/* :id or whatever we name it like :userID is on props.match.params.userID.This is the key and value and see when we log props.match.params.userID */}
    </div>
  );
};

export default App;
