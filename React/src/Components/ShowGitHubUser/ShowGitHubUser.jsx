import { GitHubUser } from "../GitHubUser/GitHubUser";
import { useParams } from "react-router-dom";

function ShowGitHubUser() {

  const { username = "josecalerom" } = useParams();

  return (
    <>
      <GitHubUser username={username} />
    </>
  );
}

export default ShowGitHubUser;