import { Hello } from "./Hello";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <div>
      <Hello />
      <Welcome name="José Calero" age={29}/>
    </div>
  );
}

    //We can use the Hello component more than once in our App component
    //We have no problems with that
    //The same way we can render the Message component and we can show its content