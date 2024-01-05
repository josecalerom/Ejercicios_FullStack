import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function useGithubUser(username) {
  if(username){
  const { data, error } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher
  );
  return {data, error}
  }

  return { data, error, loading: !data && !error };
}
