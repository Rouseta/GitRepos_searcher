// import Error from './Error';
function SearchBar(props) {
    const handleValidation = () => {
        return props.validation()
    }

    const handleSearch = (event) => {
        event.preventDefault()
        props.handleInput({
            key: "repo",
            value: event.currentTarget.value
        })
    };


    return <>
        <label htmlFor="repo" className="repo-input">Search repo by name</label>
        <input
            type="text"
            className="repo-input-box"
            name="repo"
            id="repo"
            value={props.searchedRepos}
            onChange={handleSearch}

        />
        {<button onClick={handleValidation}>Search</button>}
        <div></div>
    </>

}

export default SearchBar