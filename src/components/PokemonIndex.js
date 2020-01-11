import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  
  state = {
    filtered: "",
    pokemons: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
    .then(res => res.json())
    .then(pokemons => this.setState({ pokemons }))
  }

  handleChange = (e) => {
    this.setState({filtered: e.target.value})
  }

  filteredPokemons = () => {
    let pokemons = this.state.pokemons;
    pokemons = pokemons.filter((pokemon) => {
      return pokemon.name.indexOf(this.state.filtered) !== -1
    });
    
    return pokemons;
  }

  handleSubmit = (event, newState) => {
    event.target.reset();

    let newPokemon = {
      height: 0,
      weight: 130,
      name: newState.name,
      abilities: [],
      moves: [],
      stats: [ { value: newState.hp, name: "hp"} ],
      types: [],
      sprites: { front: newState.frontUrl, back: newState.backUrl}
    }

    fetch("http://localhost:3000/pokemon", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPokemon),
    })
    .then(res => res.json())
    .then(newPokemon => {
      let pokemons = [...this.state.pokemons, newPokemon];
      this.setState({ pokemons })
    });
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleSubmit={this.handleSubmit} />
        <br />
        <Search 
          searchWord={this.state.searchWord}
          onChange={this.handleChange}
        />
        <br />
        <PokemonCollection 
          pokemons={this.filteredPokemons()}
        />
      </Container>
    )
  }
}

export default PokemonPage
