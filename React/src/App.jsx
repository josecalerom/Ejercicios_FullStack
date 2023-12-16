import { AlertClock } from "./Components/AlertClock/AlertClock";
import { Hello } from "./Components/Hello/Hello";
import { Login } from "./Components/Login/Login";
import { UncontrolledLogin } from "./Components/UncontrolledLogin/UncontrolledLogin";

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
      <Hello />
      <AlertClock whenClick={handleShowTime}/>
      <h4>This is the Login component ⬇️</h4>
      <Login onLogin={printStateValue}/>
      <h4>This is the UncontrolledLogin component ⬇️</h4>
      <UncontrolledLogin />
    </div>
  );
}