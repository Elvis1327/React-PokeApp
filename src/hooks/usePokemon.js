import { useState, useEffect } from 'react';

import { getListPokemon } from '../helpers/pokemon-fetch';

export const usePokemon = () => {
    const [ pokemonList, setPokemonList] = useState([]);
    const [ loadingPokemon, setLoadingPokemon ] = useState(true);

    useEffect(() => {
        getListPokemon().then(res => {
            setPokemonList(res);
            setLoadingPokemon(false);
        });
    },[]);
    
    return {
        pokemonList,
        loadingPokemon
    };
}

