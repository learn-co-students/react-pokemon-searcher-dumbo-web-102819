import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    searchBar: "",
    filteredPokemons: []
  }
  componentDidMount () {
    fetch('http://localhost:3000/pokemon')
    .then(r => r.json())
    .then((response) => {

      // console.log(response[1].name)

      this.setState({
        pokemons: response,
        filteredPokemons: response
      })
    })
  }

  addNewPokemon = (pokemon) => {

    let newPokemon = {
      name: pokemon.name,
      sprites: {
        front: pokemon.frontUrl,
        back: pokemon.backUrl
      },
      stats: [
        {
        value: pokemon.hp,
        name: 'hp'
        }
      ]
    }

    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newPokemon)
    })
    .then(r => r.json())
    .then((response) => {
      // console.log("this is response", response)
      this.setState({
        pokemons: [...this.state.pokemons, response]
      }, function() {
        let pokemonsF = []
        pokemonsF = [...this.state.pokemons]
        this.setState({
          filteredPokemons: pokemonsF
        })
      })
    })
  }

  pokemonFilter = (searchCondition) => {
    let pokemonsF = []
    pokemonsF = [...this.state.pokemons]

    if(searchCondition) {
      this.setState({
        searchBar: searchCondition
      },
      function() {
        // console.log("before", pokemonsF)
        pokemonsF = pokemonsF.filter((element) => {
          return element.name.includes(searchCondition)
        })
        // console.log("after", pokemonsF)
        this.setState({
          filteredPokemons: pokemonsF
        })
      })
      // let pokemonsF = pokemonsF.filter((element) => {
      //   return element.name.includes(searchCondition)
      // })
    } else {
      this.setState({
        filteredPokemons: pokemonsF
      })    
    }

  }

  searchHelper = (event) => {
    // console.log("HELLO")
    // console.log(event.target.value)
    
    // this.pokemonFilter(event.target.value)

    this.pokemonFilter(event.target.value)

  }

  render() {

    // console.log(this.state.pokemons)

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addNewPokemon={this.addNewPokemon} />
        <br />
        <Search onChange={this.searchHelper} />
        <br />
        <PokemonCollection pokemons={this.state.filteredPokemons} />
      </Container>
    )
  }
}

export default PokemonPage
