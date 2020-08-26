import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div id="page">
      <div id="nav">
        <ul>
          <li>
            <Link to='/'>exact path</Link>
          </li>
          <li>
            <Link to='/whatever'>the default path that matches anything</Link>
          </li>
        </ul>
      </div>
      {/*Switch component contains Routes and enables
          comparing request URL with Route paths and 
        will conditionally render the first matching path.
          */}
      <Switch>
        <Route exact path="/">
          <h3>You only got this because you requested '/' specifically</h3>
        </Route>
        <Route path="/">
          <h4>You have hit the default path. It matches anything!</h4>
        </Route>
      </Switch>
    </div>
  );
}

// Typical pattern for using react router
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
);
