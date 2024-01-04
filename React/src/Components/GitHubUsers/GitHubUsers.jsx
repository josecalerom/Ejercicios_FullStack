import { useState } from "react";
import { GitHubUser } from "../GitHubUser/GitHubUser";

export function GitHubUsers() {
  const [users, setUsers] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleInputUserChange = (e) => setUserInput(e.target.value);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (userInput.trim() !== "") {
      setUsers([...users, userInput]);
      setUserInput("");
    }
  };


  return (
    <>
      <h1>GitHub users list</h1>
      <form onSubmit={handleFormSubmit}>
        <input placeholder="GitHub user" name="username" value={userInput} type="text" onChange={handleInputUserChange} />
        <button>Submit</button>
      </form>
      <br />
      <ul>
        {users.map((user) => (
          <li style={{marginBottom: "10px", marginTop: "10px"}} key={user.id}>
            <GitHubUser username={user} />
          </li>
        ))}
      </ul>
    </>
  );
}