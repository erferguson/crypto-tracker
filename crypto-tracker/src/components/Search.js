import React from 'react'

import './Search.css'

// import { useState  } from 'react'

const Search = ({ search, setSearch}) => {

    // const [search, setSearch] = useState('')

    const handleChange = e => {
        setSearch(e.target.value)
      }

    return (
    <div className="coin-search">
        <h1 className='coin-text'>Search a Currency</h1>
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
