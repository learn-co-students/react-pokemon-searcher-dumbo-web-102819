import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'


class PokemonCollection extends React.Component {
  
  
 perPokemon=() => {
   return this.props.pokemons.map((pokemon, index) => {
     return <PokemonCard pokemon={pokemon} key={index}/> 
     
   })
   
 } 
  
  render() {
    
    return (
      <Card.Group itemsPerRow={6}>
        {this.perPokemon()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
