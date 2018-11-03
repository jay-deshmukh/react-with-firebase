import React, { Component } from 'react';
import  MoviesTable  from "./Components/Movies_Table/Movies_Table";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <MoviesTable />
      </div>
    );
  }
}

export default App;
