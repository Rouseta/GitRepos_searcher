import RepoCard from "./RepoCard"
function RepoList({ repos }) {

    return (
        <>
            <h1 className="hola">Hola</h1>
            <div key={repos.id} className="result-list"><RepoCard repos={repos} /></div>
        </>

    )

}
export default RepoList

