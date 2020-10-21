import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import {CommentContextProvider} from "./context/CommentContextProvider"

ReactDOM.render(
  <React.StrictMode>
    {/* <CommentContextProvider> */}
      <App />
    {/* </CommentContextProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

