import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      id: 1,
      name: 'bulbasaur',
      hp: 39,
      frontUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      backUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png'
    }
  }

  handleSubmit = (event) => {
    let newPokemon = {
      "id": parseInt(this.state.id),
      "name": this.state.name,
      "stats": [
        {
          "value": parseInt(this.state.hp),
          "name": "hp"
        }
      ],
      "types": ["grass", "poison"],
      "sprites": {
        "front": this.state.frontUrl,
        "back": this.state.backUrl
      }
    }
    this.props.addPokemon(newPokemon)
  }

  handleChange = (event) => {
    let newState = {
      [event.target.name]: event.target.value
    }
    this.setState(newState)
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid onChange={this.handleChange} type="number" value={this.state.id} label="id" placeholder="id" name="id" />
            <Form.Input fluid onChange={this.handleChange} value={this.state.name} label="Name" placeholder="Name" name="name" />
            <Form.Input fluid onChange={this.handleChange} type="number" value={this.state.hp} label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid onChange={this.handleChange} value={this.state.frontUrl} label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid onChange={this.handleChange} value={this.state.backUrl} label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
