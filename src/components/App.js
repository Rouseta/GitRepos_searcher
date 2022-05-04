import '../styles/App.css';
import Header from './Header';
import SearchBar from './SearchBar';
import { useState, useEffect } from 'react';
import getData from '../services/Api';
import RepoList from './RepoList';



function App() {
  const [repos, setRepos] = useState({});

  const [searchedRepos, setSearchedRepos] = useState("")
  const [validSearch, setValidSearch] = useState(false)


  //Handle Use Effect God, help me!


  useEffect(() => {

    if (validSearch) {
      getData(searchedRepos).then((reposData) => {
        setRepos(reposData)
        console.log(reposData);

      });
    }
  }, [validSearch]);



  //Handle Input

  const handleInput = (data) => {
    if (data.key === "repo") {
      setSearchedRepos(data.value)
    }




  }
  const validation = () => {

    if (searchedRepos === "") {
      setValidSearch(false)
      setRepos({});



    } else { setValidSearch(true) }
  }




  return (
    <div className="App">
      <Header />
      <SearchBar repos={repos} searchedRepos={searchedRepos} handleInput={handleInput} validation={validation} />
      <RepoList repos={repos} />

    </div>
  );
}

export default App;
