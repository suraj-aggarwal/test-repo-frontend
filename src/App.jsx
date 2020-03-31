import React from 'react';
import {
  Router, Route, Switch,
} from 'react-router-dom';
import ViewPage from './Pages/ViewPage';
import MainPage from './Pages/MainPage';
import ListUnsorted from './Pages/List';
import history from './Components/history';

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <Router history={history}>
        <Switch>
          <Route path="/add" component={MainPage} />
          <Route path="/view/:id" component={ViewPage} />
          <Route path="/list" component={ListUnsorted} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
