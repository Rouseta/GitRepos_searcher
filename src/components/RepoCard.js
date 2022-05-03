function RepoCard({ repos }) {

    return (
        <>

            <img src={repos.img} alt={repos.userName} className="avatar" />
            <h2 className="name">{repos.userName}</h2>

            {/* Hacer map de repos.repo para pintar listado de repos */}


            <li className="repos">My Repos: {repos.repo}</li>
        </>
    )


}
export default RepoCard;