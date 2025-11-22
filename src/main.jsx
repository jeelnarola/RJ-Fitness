import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";
import { store } from "./Components/Store/Store.jsx";
import { BrowserRouter } from "react-router-dom";
 // 👈 REQUIRED CSS IMPORT
import './App.css';  // 👈 ADD THIS
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
