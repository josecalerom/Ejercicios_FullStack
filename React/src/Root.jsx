import { BrowserRouter } from "react-router-dom";
import { App } from "./App";

export const Root = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};