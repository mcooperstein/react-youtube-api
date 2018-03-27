import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/searchBar';

const API_KEY = "AIzaSyCMLli-_yMETaayIelMFscGxox9A1cbgGA";

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

ReactDOM.render(<App/>, document.querySelector('.container'));
