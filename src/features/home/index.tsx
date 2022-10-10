import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { Pokemon, PokemonDetails } from '../../redux/models';
import {
  fetchListPokemon,
  getPokemonDetails,
} from '../../redux/slice/pokemonSlice';
import styles from '../../styles/Home.module.css';
import PokemonCard from './components/PokemonCard';

const HomeComponent: React.FC = () => {
  const pokemons = useAppSelector((state) => state.pokemons.data);
  console.log('🚀 ~ file: index.tsx ~ line 13 ~ pokemons', pokemons);
  const listPokemonDetails = useAppSelector(
    (state) => state.pokemons.listPokemon
  );
  // console.log('listPokemonDetails', listPokemonDetails);
  const dispatch = useAppDispatch();

  const [listPokemon, setListPokemon] = useState<Array<PokemonDetails>>([]);
  const [offset, setOffset] = useState<number>(0);
  const [limit, setLimit] = useState<number>(20);

  const loadMorePokemon = () => {
    if (pokemons?.results) {
      setOffset(offset + limit);
      pokemons.results.map((item: Pokemon) => {
        dispatch(getPokemonDetails(item.name));
      });
    }
  };

  useEffect(() => {
    if (listPokemonDetails.length > 0) {
      setListPokemon(
        listPokemonDetails.map((item) => ({
          name: item.name,
          image: item.sprites.front_default,
        }))
      );
    }
  }, [listPokemonDetails]);

  useEffect(() => {
    const params = {
      offset,
      limit,
    };
    dispatch(fetchListPokemon(params));
  }, [dispatch, offset, limit]);

  return (
    <div className={styles.container}>
      <div className='flex flex-wrap items-center'>
        {listPokemon?.length > 0 &&
          listPokemon.map((pokemon) => (
            <PokemonCard
              key={pokemon.name}
              name={pokemon.name}
              image={pokemon.image}
            />
          ))}
      </div>
      <div style={{ width: '100%', textAlign: 'center', marginTop: 12 }}>
        <button
          style={{
            backgroundColor: '#fff',
            padding: 12,
            color: '#000',
            borderRadius: 12,
          }}
          onClick={loadMorePokemon}
        >
          Xem thêm
        </button>
      </div>
    </div>
  );
};

export default HomeComponent;
