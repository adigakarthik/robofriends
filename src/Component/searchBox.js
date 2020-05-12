import React from 'react';

const SearchBox = ({searchChange}) =>{
    return(
        <input 
        className='tc pa3 ba b--green bg-lightest-blue'
        type="search" 
        placeholder='search robots'
        onChange={e=>searchChange(e.target.value)}
        // onChange={e=>searchChange(e)}
        />
    );
}

export default SearchBox;