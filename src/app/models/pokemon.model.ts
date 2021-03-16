export interface Pokemon {
  id?: number;
  name: string;
  url: string;
  image?: string;
  weight?: number;
  height?: number;
  types?: PokemonType[];
  stats?: PokemonStat[];
  sprites?: PokemonSprite[];
}

export interface PokemonType {
    slot: number;
    type: PokemonTypeDetail;
}

export interface PokemonTypeDetail {
  name: string;
  url: string;
}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: PokemonStatStats;
}

export interface PokemonStatStats {
  name: string;
  url: string;
}

export interface PokemonSprite {
  back_default: string;
  front_default: string;
  other: PokemonSpriteOther;
}

export interface PokemonSpriteOther {
  dream_world: any;
  'official-artwork': PokemonSpriteOfficial;
}

export interface PokemonSpriteOfficial {
  front_default: string;
}
