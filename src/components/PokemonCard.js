import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isClicked:false
    }
    
  }
  

  capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  getHp = () => {
    return this.props.pokemon.stats.find(stat => stat.name === "hp").value
  }

  handleClick = () => {
    this.setState({
      isClicked:!this.state.isClicked
    })
  }

  render() {

    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className="image">
            <img src={!this.state.isClicked ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.capitalize(this.props.pokemon.name)}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.getHp()} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
