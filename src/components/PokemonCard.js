import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  
  state = {
    imgClicked: false
  }
  
  handleClick=() => {
   
    this.setState({
      imgClicked: !this.state.imgClicked
    })
    
  }
  
  render() {
    const hp = this.props.pokemon.stats.find((stat) => {
      return stat.name === 'hp'
    })

    
    return (
      <Card>
        <div>
          <div className="image">
            {this.state.imgClicked? <img onClick={this.handleClick} src={this.props.pokemon.sprites.back}alt={this.props.pokemon.name} /> : <img onClick={this.handleClick} src={this.props.pokemon.sprites.front}alt={this.props.pokemon.name} />}
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp.value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
