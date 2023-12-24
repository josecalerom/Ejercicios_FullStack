import { StrictMode } from "react";
import { App } from "./App"
import { createRoot } from 'react-dom/client'
import "./index.scss"

//Without StrictMode code:
createRoot(document.getElementById("root")).render(<App />);

//StrictMode code:
// createRoot(document.getElementById("root")).render(<StrictMode><App /></StrictMode>);