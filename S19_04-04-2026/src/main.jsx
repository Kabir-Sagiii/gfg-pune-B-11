import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

// const x = createRoot(document.getElementById("root"));

// x.render(<App />);

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);

// createRoot(document.getElementById("root")).render(<App />);
