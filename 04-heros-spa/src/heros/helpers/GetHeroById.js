import { heroes } from "../data/heros";

export const GetHeroById = (id) => {
  return heroes.find((hero) => hero.id === id);
};
