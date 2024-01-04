import { Welcome } from "./components/Welcome/Welcome.jsx";
import { Route, Routes } from "react-router-dom";

export function App() {

  return (
    <Routes>
      <Route path="/" element={<Welcome name="José Ángel" />} />
    </Routes>
  );
}
