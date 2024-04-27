import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import PostProvider from "./context/PostContext.jsx";
import { SearchProvider } from "./context/SearchContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SearchProvider>
      <PostProvider>
        <App />
      </PostProvider>
    </SearchProvider>
  </React.StrictMode>
);
