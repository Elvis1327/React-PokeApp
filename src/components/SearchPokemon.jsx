import React from 'react';

import './index.css';

const SearchPokemon = ({handleOnChange}) => {
    return (
        <>
            <div className="_main-container-search-component">
                <h1>PokeApp</h1>
                <input 
                    type="text" 
                    onChange={handleOnChange}
                    placeholder="Introduce one Pokemon"
                    className="_search-pokemon"
                />
            </div>
        </>
    )
};
export default SearchPokemon;

