import React from 'react';
import ReactDom from 'react-dom';
import Timesheet from './timesheet';

function App() {
  return (
    <div>
      <h1>Aurity Dev Client Timesheet</h1>
      <Timesheet />
    </div>
  );
}

ReactDom.render(
  <App />,
  document.getElementById('app')
);
