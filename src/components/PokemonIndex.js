import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from '../Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemonList: [],
    userSearch: ""
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(p => p.json())
    .then((pokes) => {
      this.setState({
        pokemonList: pokes
      })
    })
  }

  searchChange = (text) => {
    this.setState({
      userSearch: text.target.value
    })
  };

  render() {
    //Stole this filter logic from soln
    let pokes = this.state.pokemonList.filter(poke => poke.name.includes(this.state.userSearch))

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search handleTyping={this.searchChange} />
        <br />
        <PokemonCollection pokemonList={pokes} />
      </Container>
    )
  }
}

export default PokemonPage
