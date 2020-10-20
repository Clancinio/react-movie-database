import React from 'react';
import Search from "./Components/Search";
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    seleted: {}
  });

  const apiurl = "http://www.omdbapi.com/?i=tt3896198&apikey=22e4fee5";

  const search = (e) => {
    if(e.key == "Enter") {
      axios(apiurl + "&s=" + state.s).then((data => {
        let results = data.Search;

        setState(prevState => {
          return {...prevState, results: results}
        })
      }))
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
      </main>
    </div>
  );
}

export default App;
