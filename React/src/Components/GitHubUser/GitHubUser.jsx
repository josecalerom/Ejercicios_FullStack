import useGithubUser from "../CustomHooks/useGitHubUser";

export function GitHubUser({ username }) {

  const data = useGithubUser(username);
  
  return (
    <div>
      {data && (
        <div style={{border: "2px solid black", width: "fit-content", padding: "5px"}}>
          <h3 style={{color: "blue", textDecoration: "underline"}}>{data.name} info</h3>
          <img width={"100px"} src={data.avatar_url} alt="User's profile pic" />
          <h2>{`Name: ${data.name}`}</h2>
          <h2>{`Username: ${data.login}`}</h2>
        </div>
      )}
    </div>
  );
}