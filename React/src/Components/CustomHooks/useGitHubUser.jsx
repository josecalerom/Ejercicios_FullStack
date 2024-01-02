import { useEffect, useState } from "react";

export default function useGithubUser(username) {

const [data, setData] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError]= useState(null)

  async function fetchGitHubUser(username) {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch(`https://api.github.com/users/${username}`);
      const json = await response.json();
      console.log(json);

      if(response.status !== 200) {
        setError(new Error())
      }

      setData(json);
    } catch (error) {
      setError(error);
      setData(null);
      console.log("Error", error);
    } finally {
        setLoading(false);
    }
  }
  useEffect(() => {
    fetchGitHubUser(username);
  }, [username]);

  return { data , loading , error };

}