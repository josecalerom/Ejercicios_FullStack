import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

export const GitHubUserList = () => {
  const [usersList, setUsersList] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError]= useState(null)

 
  async function fetchGitHubUser() {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch(`https://api.github.com/users`);
      const json = await response.json();
      console.log(json);

      if(response.status !== 200) {
        setError(new Error())
      }

      setUsersList(json);
    } catch (error) {
      setError(error);
      setUsersList(null);
      console.log("Error", error);
    } finally {
        setLoading(false);
    }
  }

  const handleUserClick = (user) => {
    setCurrentUser(user);
  };

  return (
    <div>
      <h1>GitHub users' list</h1>
      {usersList.length === 0 ? <button onClick={fetchGitHubUser}>Show list</button> : <button disabled>Show list</button>}
      <ul>
        {usersList.map((user) => (
          <li key={user.id} onClick={() => handleUserClick(user.login)}>
            {user.login}
          </li>
        ))}
      </ul>
      {currentUser && (
        <button>
        <Link to={`/users/${currentUser}`}>Show {currentUser} profile</Link>
        </button>
      )}
      <hr />
      <Outlet />
    </div>
  );
};
