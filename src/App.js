import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div id="page">
      <h1>Hello World</h1>
      <h2>Live reload?</h2>
      <div id="nav"></div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept()
}
