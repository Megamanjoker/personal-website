import React from 'react';
import MovieList from './components/MovieList';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MovieList/>
    </div>
  );
}

export default App;
