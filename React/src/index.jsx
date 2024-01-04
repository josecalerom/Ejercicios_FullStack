import { StrictMode } from "react";
import { createRoot } from 'react-dom/client'
import "./index.scss"
import ReactDOM from "react-dom";
import { Root } from "./Root"

//Without StrictMode code:
// createRoot(document.getElementById("root")).render(<App />);

//StrictMode code:
// createRoot(document.getElementById("root")).render(<StrictMode><App /></StrictMode>);

const root = document.querySelector("#root")
ReactDOM.render(<Root />, root)