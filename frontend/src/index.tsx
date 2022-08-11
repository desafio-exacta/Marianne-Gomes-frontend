import React from 'react';

import "./style/global.scss";
import Routes from "./routes";
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<Routes />);

