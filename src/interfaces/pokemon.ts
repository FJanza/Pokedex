export interface Pokemon {
  name: string;
  value?: ValueClass | string;
  subHooks: any[];
  hookSource: HookSource;
}

export interface HookSource {
  lineNumber: number;
  functionName: string;
  fileName: string;
  columnNumber: number;
}

export interface ValueClass {
  base_happiness: number;
  capture_rate: number;
  color: string;
  egg_groups: string;
  evolution_chain: EvolutionChain;
  evolves_from_species: null;
  flavor_text_entries: string;
  form_descriptions: string;
  forms_switchable: boolean;
  gender_rate: number;
  genera: string;
  generation: string;
  growth_rate: string;
  habitat: string;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: string;
  order: number;
  pal_park_encounters: string;
  pokedex_numbers: string;
  shape: string;
  varieties: string;
}

export interface Chain {
  evolution_details: EvolutionDetail[];
  evolves_to: Chain[];
  is_baby: boolean;
  species: Species;
}

export interface EvolutionChain {
  url: string;
}

export interface EvolutionDetail {
  gender: null;
  held_item: null;
  item: Species | null;
  known_move: null;
  known_move_type: Species | null;
  location: Species | null;
  min_affection: number | null;
  min_beauty: null;
  min_happiness: number | null;
  min_level: null;
  needs_overworld_rain: boolean;
  party_species: null;
  party_type: null;
  relative_physical_stats: null;
  time_of_day: TimeOfDay;
  trade_species: null;
  trigger: Species;
  turn_upside_down: boolean;
}

export interface Species {
  name: string;
  url: string;
}

export enum TimeOfDay {
  Day = "day",
  Empty = "",
  Night = "night",
}
