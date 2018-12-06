import React from 'react';

const Search = (props) => {
  return (
    <div>
      <div className="search-div">
        <form onSubmit={props.submit}>
          <input type="text" placeholder="Search Entries" onChange={props.input}/>
          <input type="submit"/>
        </form>
      </div>
    </div>
  );
};

export default Search;



