import React from 'react'

const Search = props => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={(event)=>{props.handleSearch(event)}}/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
