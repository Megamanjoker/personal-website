import React from 'react';
import MovieList from './components/MovieList';
import Navbar from './Navbar';
import Latest from './components/Latest';

import { Provider } from 'react-redux';
import store from './store';
import MovieModal from './components/MovieModal';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Navbar />
      <MovieList/>
      <MovieModal />
      <Latest />
    </div>
    </Provider>
  );
}

export default App;
