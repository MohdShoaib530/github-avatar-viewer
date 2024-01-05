import useDataFetch from "../../hooks/useDataFetch";
import Image from "../Image/Image";
import "./Main.css";

function GitHubUserList({userName}) {
    const users = useDataFetch(userName);
  return (
    <div className="image-wrap">
        {users.data.map((user) => (
          <Image key={user.id} src={user.avatar} name={user.userName}/>
        ))}
    </div>
  );
};

export default GitHubUserList;
