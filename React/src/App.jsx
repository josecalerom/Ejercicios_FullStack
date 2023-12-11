import { AlertClock } from "./AlertClock";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";

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
      <Counter initialValue={10} incrementAmount={5} />
    </div>
  );
}

//We can use the Hello component more than once in our App component
//We have no problems with that
//The same way we can render the Message component and we can show its content
