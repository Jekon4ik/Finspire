import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { CoinSearch } from './coin.ds';
import { searchCoins } from './api';

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CoinSearch[]>([]);
  const [serverSearchError, setServerSearchError] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  };

  const onClick = async (e: SyntheticEvent) => {
    const result = await searchCoins(search+"usd");
    if(typeof result === "string"){
      setServerSearchError(result);
    }
    else if(Array.isArray(result.data)){
      setSearchResult(result.data);
    }
    console.log(searchResult);
  };

  return (
    <div className='App'>
      <Search onClick={onClick} search={search} handleChange={handleChange}></Search>{
        serverSearchError && <h1>{serverSearchError}</h1>
      }
      <CardList></CardList>
    </div>
  );
}

export default App;
