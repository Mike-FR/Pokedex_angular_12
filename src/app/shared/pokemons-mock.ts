import { Pokemon } from './pokemon';

// tslint:disable-next-line: max-line-length
const pikachu = new Pokemon('Pikachu', 'https://www.pokemontrash.com/pokedex/images/sugimori/025.png', 'Pikachu est un Pokémon Souris de type Électrik apparu dès la première génération. En tant que partenaire de Sacha, héros du dessin animé tiré du jeu, il est le plus célèbre des Pokémon et la mascotte officielle de la licence');
// tslint:disable-next-line: max-line-length
const salameche = new Pokemon('Salameche', 'https://www.pokemontrash.com/pokedex/images/sugimori/004.png', 'Salamèche est le Pokémon de départ de type Feu offert par le Professeur Chen dans la région de Kanto et par le Professeur Platane dans la région de Kalos.');
// tslint:disable-next-line: max-line-length
const bulbizarre = new Pokemon('Bulbizare', 'https://www.pokemontrash.com/pokedex/images/sugimori/001.png', 'Bulbizarre est un Pokémon de départ de type Plante et Poison de la première génération offert par le Professeur Chen dans la région de Kanto. Il est le premier Pokémon du Pokédex National et du Pokédex de Kanto.');

export const pokemons: Pokemon[] = [
    pikachu,
    salameche,
    bulbizarre
];
