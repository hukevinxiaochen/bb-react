import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div id="page">
      <h1>Hello World</h1>
      <h2>Live reload with entr?</h2>
      <h3>Pretty neat! entr works!</h3>
      <p>Why does it seem to be running more than 1 time per change?</p>
      <div id="nav"></div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept()
}
