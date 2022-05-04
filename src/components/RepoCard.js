import Error from "./Error";
import RepoDetail from "./RepoDetail";

function RepoCard({ repos }) {
    const userRepos = repos.repo
    const renderRepos = () => {

        if (userRepos !== undefined) {

            return userRepos.map((oneRepo, index) => {
                console.log(oneRepo.id)


                return (
                    <>


                        <RepoDetail key={index} oneRepo={oneRepo} userName={repos.userName} />




                    </>

                )
            })
        } else {

            return <Error key="error" />
        }
    }






    return (
        <ul className="">{renderRepos()} </ul>

    )
}



export default RepoCard;