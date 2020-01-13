import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  
  state = {
    pokemons: [],
    theSearchValue: ""
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(r => r.json())
    .then(pokemonArr => {

      this.setState({
        pokemons: pokemonArr
      })
    })
  }

  

  searchBar=(event) => {
    this.setState({
      theSearchValue: event.target.value
    })

  }

  handleSubmit=(event) => {
    console.log(event.target.name.value, event.target.hp.value, event.target.frontUrl.value, event.target.backUrl.value)
    let newPokemon={
      height: '',
      weight: '',
      name: event.target.name.value,
      abilities: [],
      moves: [],
      stats:[{
        value: event.target.hp.value,
        name: "hp"
      }],
      types: [],
      sprites: {
        front: event.target.frontUrl.value,
        back: event.target.backUrl.value
      }
    }

    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'content-type': "application/json",
        'accept': "application/json"
      },
      body: JSON.stringify(newPokemon)
    })
    .then(r => r.json())
    .then(pokemon => {this.setState({
      pokemons: [
        ...this.state.pokemons,
        pokemon
      ]
    })})
  }


  render() {
      let pokemons=this.state.pokemons

      let foundPokemon = this.state.pokemons.filter(pokemon => pokemon.name.indexOf(this.state.theSearchValue) > -1)
          pokemons=foundPokemon
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleSubmit={this.handleSubmit}/>
        <br />
        <Search onChange={this.searchBar} />
        <br />
        <PokemonCollection pokemons={pokemons}/>
      </Container>
    )
  }
}

export default PokemonPage
