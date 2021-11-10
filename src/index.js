import React from "react";
import ReactDOM from "react-dom";

import "./16-markdown/index.css";
import MarkdownApp from "./16-markdown/App";

function App() {
  return (
    <>
      <MarkdownApp />
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
