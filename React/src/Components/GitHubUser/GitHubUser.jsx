import { useEffect, useState } from "react";

export function GitHubUser({ username }) {

  const [data, setData] = useState(null);

  async function fetchGitHubUser(username) {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const json = await response.json();
      console.log(json);
      setData(json);
    } catch (error) {
      console.log("Error", error);
    }
  }
  useEffect(() => {
    fetchGitHubUser(username);
  }, [username]);
  return (
    <div>
      {data && (
        <div>
          <h1 style={{color: "blue", textDecoration: "underline"}}>GitHub user info</h1>
          <img width={"100px"} src={data.avatar_url} alt="User's profile pic" />
          <h2>{`Name: ${data.name}`}</h2>
          <h2>{`Username: ${data.login}`}</h2>
        </div>
      )}
    </div>
  );
}