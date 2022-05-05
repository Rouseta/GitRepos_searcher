import '../styles/RepoList.css'
import logo from '../images/buscar.png'
import RepoCard from "./RepoCard"
function RepoList({ repos }) {


    return (
        <>

            <div className="userDiv">

                <h2 className="userDiv-name">  {repos.userName}</h2>
                <img src={repos.img || logo} alt={repos.userName} className="UserDiv-avatar" />
                <h2 classNam e="userDiv-repos"> My Repos</h2>

                <RepoCard repos={repos} /></div>
        </>

    )

}
export default RepoList

