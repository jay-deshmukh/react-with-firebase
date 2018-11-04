import React, { Component} from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import ErrorBoundry from './Components/Error_Boundry/Error_Boundry';
import Comments from './Components/Comments/Comments';
import MoviesTable from './Components/Movies_Table/Movies_Table';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
        <ErrorBoundry>
          <Route exact path="/" render={() => (<MoviesTable />)}/>
          <Route exact path="/comments" render={() => (<Comments />)}/>
        </ErrorBoundry>        
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
