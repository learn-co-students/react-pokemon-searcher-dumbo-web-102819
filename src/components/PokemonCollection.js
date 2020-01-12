import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  mapPokemons = () => {
    // console.log(this.props.pokemons) 
    return this.props.pokemons.map(pokemon => <PokemonCard pokemon={pokemon} key={pokemon.id} />)

  }

  render() {

    // console.log(this.props.pokemons)

    return (
      <Card.Group itemsPerRow={6}>
        {this.mapPokemons()}
      </Card.Group>
    )
  }
}

export default PokemonCollection

