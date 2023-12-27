import { Welcome } from "./components/Welcome/Welcome.jsx"
import { Clock } from "./Components/Clock/Clock.jsx"
import { TodoList } from "./Components/TodoList/TodoList.jsx"
import { UncontrolledLogin } from "./Components/UncontrolledLogin/UncontrolledLogin.jsx"
import { FocusableInput} from "./Components/FocusableInput/FocusableInput.jsx"

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
      <h1>Welcome component</h1>
      <Welcome />
      <h1>Clock component</h1>
      <h4>style using sass package</h4>
      <Clock />
      <h1>TodoList component</h1>
      <h4>style using CSS Modules</h4>
      <TodoList />
      <h1>UncontrolledLogin component</h1>
      <h4>style with tailwindcss package</h4>
      <UncontrolledLogin />
      <h1>FocusableInput component</h1>
      <h4>style with react-bootstrap package</h4>
      <FocusableInput />
    </div>
  );
}