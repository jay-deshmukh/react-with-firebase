import React, {
  Component,
} from 'react';
import MoviesTable from './Components/Movies_Table/Movies_Table';
import Comments from './Components/Comments/Comments';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <MoviesTable />
            )}
          />
          <Route
            exact
            path="/comments"
            render={() => (
              <Comments />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
