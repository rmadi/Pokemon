export interface PokemonListItemPrpos {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItemPrpos[];
}

export interface PokemonSpecies {
  color: { name: 'black'|'blue'|'brown'|'gray'|'green'|'pink'|'purple'|'red'|'white'|'yellow' };
  names: { language: { name: string }, name: string }[];
  flavor_text_entries: { flavor_text: string, language: { name: string } }[];
}
export interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  cries: Cries;
  forms: NamedAPIResource[];
  game_indices: GameIndex[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_abilities: PastAbility[];
  past_types: any[];
  species: NamedAPIResource;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

export interface Ability {
  ability: NamedAPIResource;
  is_hidden: boolean;
  slot: number;
}

export interface NamedAPIResource {
  name: string;
  url: string;
}

export interface Cries {
  latest: string;
  legacy: string;
}

export interface GameIndex {
  game_index: number;
  version: NamedAPIResource;
}

export interface Move {
  move: NamedAPIResource;
  version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: NamedAPIResource;
  order: number | null;
  version_group: NamedAPIResource;
}

export interface PastAbility {
  abilities: Ability[];
  generation: NamedAPIResource;
}

export interface Sprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other: OtherSprites;
  versions: VersionSprites;
}

export interface OtherSprites {
  dream_world: SpriteSet;
  home: SpriteSet;
  "official-artwork": OfficialArtwork;
  showdown: SpriteSet;
}

export interface SpriteSet {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

export interface OfficialArtwork {
  front_default: string;
  front_shiny: string;
}

export interface VersionSprites {
  "generation-i": GenerationISprites;
  "generation-ii": GenerationIISprites;
  "generation-iii": GenerationIIISprites;
  "generation-iv": GenerationIVSprites;
  "generation-v": GenerationVSprites;
  "generation-vi": GenerationVISprites;
  "generation-vii": GenerationVIISprites;
  "generation-viii": GenerationVIIISprites;
}

export interface GenerationISprites {
  "red-blue": RedBlueSprites;
  yellow: YellowSprites;
}

export interface RedBlueSprites {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
}

interface YellowSprites {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
}

export interface GenerationIISprites {
  crystal: CrystalSprites;
  gold: GoldSilverSprites;
  silver: GoldSilverSprites;
}

export interface CrystalSprites {
  back_default: string;
  back_shiny: string;
  back_shiny_transparent: string;
  back_transparent: string;
  front_default: string;
  front_shiny: string;
  front_shiny_transparent: string;
  front_transparent: string;
}

export interface GoldSilverSprites {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent: string;
}

export interface GenerationIIISprites {
  emerald: EmeraldSprites;
  "firered-leafgreen": FireredLeafgreenSprites;
  "ruby-sapphire": RubySapphireSprites;
}

export interface EmeraldSprites {
  front_default: string;
  front_shiny: string;
}

export interface FireredLeafgreenSprites {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface RubySapphireSprites {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface GenerationIVSprites {
  "diamond-pearl": DiamondPearlSprites;
  "heartgold-soulsilver": DiamondPearlSprites;
  platinum: DiamondPearlSprites;
}

export interface DiamondPearlSprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

export interface GenerationVSprites {
  "black-white": BlackWhiteSprites;
}

export interface BlackWhiteSprites {
  animated: AnimatedSprites;
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

export interface AnimatedSprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

export interface GenerationVISprites {
  "omegaruby-alphasapphire": OmegaRubyAlphaSapphireSprites;
  "x-y": XYSprite;
}

export interface OmegaRubyAlphaSapphireSprites {
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

export interface XYSprite {
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

export interface GenerationVIISprites {
  icons: Icons;
  "ultra-sun-ultra-moon": UltraSunUltraMoonSprites;
}

export interface Icons {
  front_default: string | null;
  front_female: string | null;
}

export interface UltraSunUltraMoonSprites {
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

export interface GenerationVIIISprites {
  icons: Icons;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: NamedAPIResource;
}

export interface Type {
  slot: number;
  type: NamedAPIResource;
}