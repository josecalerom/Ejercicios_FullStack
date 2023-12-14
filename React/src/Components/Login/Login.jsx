import { useState } from "react";

function createData() {
  return {
    username: "",
    password: "",
    remember: false,
  };
}

export function Login() {
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

  return (
    <div>
      <input
        value={data.username}
        onChange={handleInputChange}
        name="username"
        type="text"
      />
      <input
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
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
