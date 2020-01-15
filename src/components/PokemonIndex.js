import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'
import PokemonCard from './PokemonCard'


class PokemonPage extends React.Component {

  state = {
    allPokemon: [],
    filteredPokemon: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(r => r.json())
    .then(pokArray => {
      pokArray.splice(0, 0, {
        name: "bulbasaur", 
        "sprites": {
          "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          "back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"
                  },
        "stats": [
          {"value": 100, "name": ""},{"value": 100, "name": ""},{ "value": 83,"name": ""},
          {"value": 82, "name": ""},{"value": 80, "name": ""},{ "value": 40, "name": "hp"}
        ]
      }), 
        this.setState({
          allPokemon: pokArray,
          filteredPokemon: pokArray
        }) 
    })  
      
      
  }

  createPokemonDiv = ()=> {
    return this.state.filteredPokemon.map((poki, idx) =>  {
      return <PokemonCard name={poki.name} frontImage={poki.sprites.front} backImage={poki.sprites.back} hp={poki.stats[5].value}/>
    })
  }

  handleSearch = (event)=> {
    //console.log(event.target.value)
    let filter = event.target.value
    let filteredPokiArray = this.state.allPokemon.filter((poki) => poki.name.includes(filter))
    
    this.setState({
      filteredPokemon: filteredPokiArray
    })
  }

  handleSubmit = (event) => {
    let name = event.target.name.value
    let hp = event.target.hp.value
    let front = event.target.frontUrl.value
    let back = event.target.backUrl.value

    let newPokemon = {
      "name": name,
      "sprites": {
        "front": front,
        "back": back
      },
      "stats": [
        { "value": 100, "name": "" }, { "value": 100, "name": "" }, { "value": 83, "name": "" },
        { "value": 82, "name": "" }, { "value": 80, "name": "" }, { "value": hp, "name": "hp" }
      ]
    }

    fetch('http://localhost:3000/pokemon', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
      body: JSON.stringify(newPokemon)
    })
    .then(r => r.json())
    .then(pokeArray => this.setState({filteredPokemon: [...this.state.filteredPokemon, pokeArray ]}))
  }


  // handleFlip = ()=> {
  //   this.setState({
  //     isFlipped: !this.state.isFlipped
  //   })

  //   //console.log("erfgh,.")
  // }




  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleSubmit={this.handleSubmit}/>
        <br />
        <Search handleSearch={this.handleSearch} />
        <br />
        <PokemonCollection createPokemonDiv={this.createPokemonDiv}/>
      </Container>
    )
  }
}

export default PokemonPage
