import React from 'react';
import ReactDom from 'react-dom';
import TimesheetContainer from './timesheet-container';

function App() {
  return (
    <div>
      <h1>Aurity Dev Client Timesheet</h1>
      <TimesheetContainer />
    </div>
  );
}

ReactDom.render(
  <App />,
  document.getElementById('app')
);
