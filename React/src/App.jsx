import { AlertClock } from "./Components/AlertClock/AlertClock";
import { Counter } from "./Components/Counter/Counter";
import { Hello } from "./Components/Hello/Hello";
import { Welcome } from "./Components/Welcome/Welcome";
import { Clock } from "./Components/Clock/Clock";
import { MouseClicker } from "./Components/MouseClicker/MouseClicker";

export function App() {

  function handleShowTime() {
    const now = new Date();
    alert(`Current time: ${now.toLocaleTimeString()}`);
  }

  return (
    <div>
      <Hello />
      <Welcome name="José Calero" age={29} />
      <AlertClock whenClick={handleShowTime}/>
      <Counter initialValue={0} difAmount={6} />
      <Clock />
      <MouseClicker />
    </div>
  );
}

//We can use the Hello component more than once in our App component
//We have no problems with that
//The same way we can render the Message component and we can show its content
