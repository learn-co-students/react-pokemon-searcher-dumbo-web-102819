import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  render() {
    let pokemon = this.props.pokemon
    const pokemonCards = pokemon.map( (p,index) => <PokemonCard key={index} pokemon={p} /> )
    console.log(pokemonCards)
    return (
      <Card.Group itemsPerRow={6}>
        {pokemonCards}
      </Card.Group>
    )
  }
}

export default PokemonCollection
