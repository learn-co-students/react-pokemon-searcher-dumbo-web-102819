import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  pokemonCards() {
  return this.props.pokemons.map(pokemon => { 
    return <PokemonCard pokemon={pokemon} />
   });
  }
  
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.pokemonCards()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
