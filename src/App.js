import React, { useState } from 'react';

import IndexPokemon from './components/Index-pokemon';
import SearchPokemon from './components/SearchPokemon';
import TablePokemon from './components/TablePokemon';
import { usePokemon } from './hooks/usePokemon';

const App = () => {
    const [ inputPoke, setInputPoke ] = useState('');
    const [ currenPage, setCurrentPage ] = useState(0);
    const {  pokemonList } = usePokemon();

    const handleFilterPokemon = () => {
        if(inputPoke.length === 0){
            return pokemonList.slice(currenPage, currenPage + 5);
        }
        const filtered = pokemonList.filter(res => res.name.toLowerCase().includes(inputPoke.toLowerCase()));
        return filtered.slice(currenPage, currenPage + 5);
    }

    const handleOnChange = (e) => {
        setInputPoke(e.target.value)
    }
    const handlePrevPage = () => {
        if(currenPage > 0){
            setCurrentPage(currenPage - 5)
        };
    }
    const handleNextPage = () => {
        if( pokemonList.filter( poke => poke.name.includes( inputPoke ) ).length > 5 ){
            setCurrentPage(currenPage + 5)
        };
    };

    return (
        <IndexPokemon>
            <SearchPokemon handleOnChange={handleOnChange} />
            <TablePokemon 
                handleFilterPokemon={handleFilterPokemon} 
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
            />
        </IndexPokemon>
    )
};
export default App;



