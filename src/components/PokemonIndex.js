import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'
import { get } from 'https';

class PokemonPage extends React.Component {

  constructor() {
    super();
    this.state = {
      allPokemon: [],
      isFiltered:false,
      filteredPokemon:[]
    }
  }

  componentDidMount() {
    this.getPokemon()
  }

  getPokemon = () => {
    fetch('http://localhost:3000/pokemon')
    .then(r => r.json())
    .then(pokemon => {
      this.setState({
        allPokemon:pokemon
      })
      console.log(this.state.pokemon);
    })
  }

  postPokemon = (poke) => {
    console.log(poke);
    fetch('http://localhost:3000/pokemon', {
      method:'POST',
      headers: {
        'content-type':'application/json',
        'accept':'application/json'
      },
      body: JSON.stringify({
        name:poke.name,
        stats:[{
          value:poke.hp,
          name:"hp"
        }],
        sprites:{
          front:poke.frontUrl,
          back:poke.backUrl
        }
      })
    })
    .then(r => r.json())
    .then((newPoke) => {
      console.log(newPoke);
      this.getPokemon()
    })
  }

  showPokemon = () => {
    return this.state.isFiltered ? this.state.filteredPokemon : this.state.allPokemon
  }

  handleChange = (event) => {
    let filteredPokemon;
    if (event.target.value !== '') {
      filteredPokemon = this.state.allPokemon.filter(poke => poke.name.includes(event.target.value.toLowerCase()))
      this.setState({
        isFiltered:true,
        filteredPokemon:filteredPokemon
      })
    } else {
      this.setState({
        isFiltered:false,
        filteredPokemon:[]
      })
    }
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        //Fix the submit.
        <PokemonForm onHandleSubmit={this.postPokemon}/>
        <br />
        <Search onChange={this.handleChange} />
        <br />
        <PokemonCollection pokemon={this.showPokemon()} />
      </Container>
    )
  }
}

export default PokemonPage
