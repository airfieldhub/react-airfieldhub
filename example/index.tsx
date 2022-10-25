import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import { AirfieldHubBookout, AirfieldHubPPR } from '../.';

const App = () => {
  return (
    <div>
      <AirfieldHubBookout airfieldhub_key="eyJhaXJmaWVsZElkIjoiRkRueThrbGhOZ2RLeTNWTFF2R0YiLCJwaWxvdEJyaWVmaW5nVXJsIjoiaHR0cHM6Ly90b2F2aWF0ZS5jb20ifQ" />
      <AirfieldHubPPR airfieldhub_key="eyJhaXJmaWVsZElkIjoiRkRueThrbGhOZ2RLeTNWTFF2R0YiLCJwaWxvdEJyaWVmaW5nVXJsIjoiaHR0cHM6Ly90b2F2aWF0ZS5jb20ifQ" />
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(<App />);


// import 'react-app-polyfill/ie11';
// import * as React from 'react';
// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('app');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App />);