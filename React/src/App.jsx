import { Welcome } from "./components/Welcome/Welcome.jsx"
import { Counter } from "./Components/Counter/Counter.jsx"
import ShowGitHubUser from "./Components/ShowGitHubUser/ShowGitHubUser.jsx"
import { Route, Routes, Link } from "react-router-dom";

export function App() {

  return (
    <>
    <nav>
      <Link to="/">Home page</Link> | <Link to="/users/josecalerom">GitHub user</Link> | <Link to="/counter">Counter</Link>
      <hr />
    </nav>
      <Routes>
        <Route path="/" element={<Welcome name="José Ángel" />} />
        <Route path="/counter" element={<Counter initialValue={0} difAmount={5} />}/>
        <Route path="/users/:username" element={<ShowGitHubUser />} />
      </Routes>
    </>
  );
}
