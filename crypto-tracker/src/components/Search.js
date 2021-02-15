import React from 'react'

const Search = () => {
    return (
    <div className="coin-search">
        <h1 className='coin-text'>Search a Currency</h1>
        <form>
          <input 
          type="text" 
          placeholder='Search' 
          className="coin-input"
          // onChange={}
          />
        </form>
    </div>
    )
}

export default Search
