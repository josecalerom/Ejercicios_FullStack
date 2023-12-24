import { Welcome } from "./components/Welcome/Welcome.jsx"

export function App() {

  function printStateValue(state) {
    console.log(state);
  }

  function handleShowTime() {
    const now = new Date();
    alert(`Current time: ${now.toLocaleTimeString()}`);
  }

  return (
    <div>
      <Welcome />
    </div>
  );
}