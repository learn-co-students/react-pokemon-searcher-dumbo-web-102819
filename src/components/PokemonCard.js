import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    back: false
  }

  pokemonHP() {
    const hp = this.props.pokemon.stats.find(obj => obj.name === 'hp');
    return hp.value;
  }

  toggleFrontBack = () => {
    this.setState({
      back: !this.state.back
    });
  }
  
  render() {
    const { name, sprites: { front, back } } = this.props.pokemon
    return (
      <Card onClick={this.toggleFrontBack} >
        <div>
          <div className="image">
            {!this.state.back ? <img src={front} alt={name} /> : <img src={back} alt={name} />}
          </div>
          <div className="content">
            <div className="header">{ name }</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.pokemonHP()} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
