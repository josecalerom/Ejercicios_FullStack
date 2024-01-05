import useSWR from "swr";

export default function useGithubUser(username) {
  const { data, error, mutate } = useSWR(
    `https://api.github.com/users/${username}`,
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
