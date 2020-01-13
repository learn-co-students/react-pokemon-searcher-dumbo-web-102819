import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    display: "front"
  }

  handleClick = () => {
    this.setState({
      display: this.state.display == "front" ? "back" : "front"
    })
  }

  getHpValue = () => {
    let hpValue = ""
    this.props.pokemon.stats.forEach((stat) => {
      if(stat.name == "hp"){
        hpValue = stat.value
      }
    })
    return hpValue
  }

  render() {
    return (
      <Card>
        <div onClick={this.handleClick}>
          <div className="image">
            <img src={this.state.display == "front" ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back}alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name.charAt(0).toUpperCase() + this.props.pokemon.name.slice(1)}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
             {this.getHpValue()}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
