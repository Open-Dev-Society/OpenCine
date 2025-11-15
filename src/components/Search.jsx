import React from 'react'

const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div className="search text-white">
        <div>
           <img src="/search.svg" alt="search" />
           <input type="text" placeholder="Search through thousands of movies" 
           value={searchTerm} 
           onChange={(e) => setSearchTerm(e.target.value)} />
           {/* <h1 className="text-white ">{searchTerm}</h1> */}
        </div>
    </div>
  )
}

export default Search