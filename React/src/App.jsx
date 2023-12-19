import { TodoList } from "./Components/TodoList/TodoList";

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
      <h3>This is the TodoList component</h3>
      <TodoList />
    </div>
  );
}