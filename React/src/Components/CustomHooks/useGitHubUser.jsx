import { useEffect, useState } from "react";

export default function useGithubUser(username) {

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

  return data;

}