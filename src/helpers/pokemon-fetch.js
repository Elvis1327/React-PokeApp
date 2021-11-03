import axios from 'axios';

// const pokemonApi = axios.create({
//     mainUrl: 'https://pokeapi.co/api/v2'
// });
const mainUrl = 'https://pokeapi.co/api/v2'

export const getListPokemon = async () => {
    const { data } = await axios.get(`${mainUrl}/pokemon?limit=1000`);
    
    const resp = data.results.map(poke => {

    const id = poke.url.split('/')[6];
    const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ id }.png`;
    const name = poke.name;

    return {
        id,
        pic,
        name
    };

    });
    
    return resp;
};


