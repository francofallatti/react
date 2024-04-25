import { setPokemons, startLoadingPokemons } from "./pokemonSlice";
import axios from "axios";

const pokemonApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    const { data } = await pokemonApi.get(
      `pokemon?limit=10&offset=${page * 10}`
    );

    dispatch(setPokemons({ data: data.results, page: page + 1 }));
  };
};
