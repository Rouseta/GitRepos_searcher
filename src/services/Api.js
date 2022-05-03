const getData = (searchRepo) => {

    return fetch(`https://api.github.com/users/${searchRepo}/repos`)
        .then((response) => response.json())
        .then((data) => {
            const cleanData = data.map((eachRepo => {
                return eachRepo.name

            }))


            return {
                id: data[0].owner.id,
                repo: cleanData,
                img: data[0].owner.avatar_url,
                userName: data[0].owner.login
            }
        })
}

export default getData