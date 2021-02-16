import React from 'react'

import './Search.css'

const Search = ({ setSearch}) => {

    const handleChange = e => {
        setSearch(e.target.value)
      }

    return (
    <div className="coin-search">
        <h1 className='coin-text'>Search a Crypto</h1>
        <form>
          <input 
          type="text" 
          placeholder='Search' 
          className="coin-input"
          onChange={handleChange}
          />
        </form>
    </div>
    )
}

export default Search
