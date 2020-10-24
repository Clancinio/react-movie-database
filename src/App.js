import React from 'react';
import { useState } from 'react';
import axios from 'axios';

import Search from "./Components/Search";
import Results from "./Components/Results";
const api_key = process.env.REACT_APP_OMDB_API_KEY;


function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    seleted: {}
  });

  const apiurl = "http://www.omdbapi.com/?i=tt3896198&apikey=" + api_key;

  const search = (e) => {
    if(e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;

        setState(prevState => {
          return {...prevState, results: results}
        })
      })
    }
  }

  // event
  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s}
    });

  }

  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput = { handleInput } search={ search }/>
        <Results results = { state.results } />
      </main>
    </div>
  );
}

export default App;
