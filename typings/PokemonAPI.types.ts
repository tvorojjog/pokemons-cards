export interface IPokemonsMainDataAPI {
  count: number;
  next: string;
  previous: string;
  results: IPokemonMainDataAPI[];
}

export interface IPokemonMainDataAPI {
  name: string;
  url: string;
}

export interface IPokemonDetailsAPI {
  id: number;
  name: string;
  height: number;
  weight: number;
}
