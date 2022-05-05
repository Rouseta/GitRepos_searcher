import '../styles/SearchBar.css'
function SearchBar(props) {
    const reset = () => {
        return props.handleReset()
    }
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
        <div className="mainWrapper">
            <label htmlFor="repo" className="label-input">Search repo by name</label>

            <input
                type="text"
                className="repo-input-box"
                name="repo"
                id="repo"
                value={props.searchedRepos}
                onChange={handleSearch}

            />

            <div className='wrapped'>
                <button onClick={handleValidation}>Search</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>

    </>

}

export default SearchBar