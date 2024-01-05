import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function useGithubUser(username) {
  const { data, error, mutate } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher
  );

  const refetchGitHubUser = () => {
    mutate();
  };

  return {
    data,
    error,
    loading: !data && !error,
    onFetchUser: refetchGitHubUser,
  };
}
