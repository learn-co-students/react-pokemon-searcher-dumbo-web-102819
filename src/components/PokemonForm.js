import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]:event.target.value
    }, () => {console.log(this.state)})
  }

  handleSubmit = (event) => {
    let newPokemon;
    if (!(this.state.name === '' || this.state.hp === '' || this.state.frontUrl === '' || this.state.backUrl === '')) {
      console.log('good')
      newPokemon = {...this.state}
      event.target.reset()
      this.props.onHandleSubmit(newPokemon)
    } else {
      console.log("bad")
    }
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleChange} />
            <Form.Input fluid label="hp" placeholder="hp" type='number' name="hp" onChange={this.handleChange} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.handleChange} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.handleChange} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
