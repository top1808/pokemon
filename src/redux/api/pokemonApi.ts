import axiosClient from './axiosClient';

const pokemonApi = {
  getPokemon(params: object) {
    const url = 'pokemon';
    return axiosClient.get(url, { params });
  },
  getPokemonDetails(name: string) {
    const url = `pokemon/${name}`;
    return axiosClient.get(url);
  },
};

export default pokemonApi;
