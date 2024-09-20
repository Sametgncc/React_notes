import React from 'react'
import SearchBox from './search-box'
import SearchResults from './search-results'

const Recipes = () => {

  const [searchText, setSearchText] = React.useState(" ")

  return (  
    <div>
        <SearchBox setSearchText={setSearchText}/>
        <SearchResults searchText={searchText}/>


    </div>
  )
}

export default Recipes
