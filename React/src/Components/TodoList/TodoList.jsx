import { useState, useRef, useEffect } from "react";

export function TodoList() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  const handleSubmitTodo = () => {
    if (todoInput.trim() !== "") {
      setTodos([...todos, todoInput]);
      setTodoInput("");
    }
  };

  const handleResetTodo = () => {
    setTodos([]);
    setTodoInput("");
  };

  const handleInputChange = (e) => setTodoInput(e.target.value);

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        value={todoInput}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmitTodo}>Add Todo</button>
      <button onClick={handleResetTodo}>Reset todos</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
}
