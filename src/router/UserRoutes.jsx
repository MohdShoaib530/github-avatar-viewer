import { Route,Routes } from "react-router-dom";
import GithubUser from "../components/Search/SearchTerm";

function UserRoutes(){
    return(
        <Routes>
            <Route path="/" element={<GithubUser/>} />
        </Routes>
    )
}

export default UserRoutes;