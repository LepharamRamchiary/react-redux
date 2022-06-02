import React from 'react'
import CocktailList from '../components/CocktailList';
import Search from '../components/Search';

const Home = function() {
  return (
    <div>
      <Search />
      <CocktailList />
    </div>
  )
}

export default Home;
