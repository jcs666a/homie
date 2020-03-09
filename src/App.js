import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { mapDispatchToProps, mapStateToProps } from './reducers/_dispatchers';

import HomesContainer from './components/HomesContainer/HomesContainer';

function App() {
  return (
    <Router>
      <header className="App-header">
        Hola
      </header>
      <Switch>
        <Route exact path="/" component={HomesContainer} />
      </Switch>
    </Router>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
