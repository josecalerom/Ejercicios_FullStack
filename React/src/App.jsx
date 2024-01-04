import { Welcome } from "./components/Welcome/Welcome.jsx";
import { Counter } from "./Components/Counter/Counter.jsx"
import ShowGitHubUser from "./Components/ShowGitHubUser/ShowGitHubUser.jsx"
import { Route, Routes } from "react-router-dom";

export function App() {

  return (
    <Routes>
      <Route path="/" element={<Welcome name="José Ángel" />} />
      <Route path="/counter" element={<Counter initialValue={0} difAmount={5} />}/>
      <Route path="/users/:username" element={<ShowGitHubUser />} />
    </Routes>
  );
}
