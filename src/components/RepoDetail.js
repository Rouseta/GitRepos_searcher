import '../styles/RepoDetails.css'
function RepoDetail({ oneRepo, userName }) {

    return (
        <li className="repoList" key={oneRepo.id}><a target="_blank" rel="noreferrer" href={`https://github.com/${userName}/${oneRepo.name}`}>{oneRepo.name}</a></li >
    )
}
export default RepoDetail;