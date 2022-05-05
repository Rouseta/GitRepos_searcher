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


      });
    }
  }, [validSearch]);



  //Handle Input

  const handleInput = (data) => {
    if (data.key === "repo") {
      setSearchedRepos(data.value)
    }



    //To check if the field is empty 
  }
  const validation = () => {

    if (searchedRepos === "") {
      setValidSearch(false)
      setRepos({});
    } else { setValidSearch(true) }
  }

  //Reset all fields

  const handleReset = () => {
    setRepos({});
    setValidSearch(false);
    setSearchedRepos("");



  }





  return (
    <div className="App">
      <Header />
      <SearchBar repos={repos} searchedRepos={searchedRepos} handleInput={handleInput} validation={validation} handleReset={handleReset} />
      <RepoList repos={repos} />

    </div>
  );
}

export default App;
