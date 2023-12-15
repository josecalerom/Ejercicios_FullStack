import { useState } from "react";

function createData() {
  return {
    username: "",
    password: "",
    remember: false,
  };
}

export function Login({ onLogin }) {
  const [data, setData] = useState(createData());

  function handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    const type = event.target.type;

    setData((d) => {
      return {
        ...d,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleLoginFormSubmit(event) {
    event.preventDefault();
    onLogin(data);
  }

  //Q: How do you prevent the default behavior of the form element?
  //A: we can use the "event.preventDefault()" to avoid the default behavior of the form element

  function handleResetForm() {
    setData(createData());
  }

  return (
    <form onSubmit={handleLoginFormSubmit}>
      <input
        placeholder="Your name"
        value={data.username}
        onChange={handleInputChange}
        name="username"
        type="text"
      />
      <input
        placeholder="Password"
        value={data.password}
        onChange={handleInputChange}
        name="password"
        type="password"
      />
      <input
        checked={data.remember}
        name="remember"
        type="checkbox"
        onChange={handleInputChange}
      />
      <button disabled={!data.password || !data.username}>Login</button>
      <button onClick={handleResetForm}>Reset</button>
    </form>
  );
}
