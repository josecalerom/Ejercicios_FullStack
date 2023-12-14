import { AlertClock } from "./AlertClock";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";
import { Clock } from "./Clock";

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
    </div>
  );
}

//We can use the Hello component more than once in our App component
//We have no problems with that
//The same way we can render the Message component and we can show its content
