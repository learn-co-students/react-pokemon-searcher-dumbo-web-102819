import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    filteredPokemon: [],
    searchCurrent: ""
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
    .then(r => r.json())
    .then(pokemon => {this.setState({
      pokemon: pokemon,
      filteredPokemon: pokemon
    })})
  }

  addPokemon = (newPokemon) => {
    let newInsertedArray = [...this.state.pokemon]
    if (newPokemon.id <= 1){
      newInsertedArray.unshift(newPokemon)
    } else if(newPokemon.id < this.state.pokemon.length){
      newInsertedArray = [...newInsertedArray.slice(0, newPokemon.id-1), newPokemon, ...newInsertedArray.slice(newPokemon.id-1)]
    } else {
      newInsertedArray.push(newPokemon)
    }
    this.setState({
      pokemon: newInsertedArray,
      filteredPokemon: newInsertedArray,
      searchCurrent: ""
    })
  }

  handleChange = (event) => {
    let filteredPokemon = this.state.pokemon
    filteredPokemon = filteredPokemon.filter((pokemon) => {
      let matcher = pokemon.name.slice(0, event.target.value.length)
      return event.target.value.toLowerCase() == matcher
    })
    this.setState({
      searchCurrent: event.target.value,
      filteredPokemon: filteredPokemon
    })
  } 

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search onChange={this.handleChange} searchCurrent={this.state.searchCurrent}/>
        <br />
        <PokemonCollection pokemonArr={this.state.filteredPokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
