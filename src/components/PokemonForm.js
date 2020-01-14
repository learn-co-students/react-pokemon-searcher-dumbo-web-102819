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

  handleSubmit = (form) => {
    form.preventDefault()
    // stealing this  from soln
    let {name, hp, frontUrl, backUrl} = this.state
    fetch('http://localhost:3000/pokemon',
      {method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name,
        stats: [
          {
            value: hp,
            name: 'hp'
          }
        ],
        sprites: {
          front: frontUrl,
          back: backUrl
        }
      })}
    )
    .then(r=>JSON.parse(r))
  }

  handleChange = (field) => {
    // debugger
    let fieldName = field.target.name
    let typing = field.target.value
    // console.log(this.state);
    this.setState({[fieldName]: typing})
  }

  render() {

    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
