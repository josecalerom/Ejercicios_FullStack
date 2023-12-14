import { AlertClock } from "./Components/AlertClock/AlertClock";
import { Hello } from "./Components/Hello/Hello";
import { Login } from "./Components/Login/Login";

export function App() {

  function handleShowTime() {
    const now = new Date();
    alert(`Current time: ${now.toLocaleTimeString()}`);
  }

  return (
    <div>
      <Hello />
      <AlertClock whenClick={handleShowTime}/>
      <h4>This is the Login component ⬇️</h4>
      <Login />
    </div>
  );
}

//We can use the Hello component more than once in our App component
//We have no problems with that
//The same way we can render the Message component and we can show its content
