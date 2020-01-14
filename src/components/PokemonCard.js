import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    image: this.props.poke.sprites.front,
    clicked: false
  }

  handleClick = (click) => {
    if (!this.state.clicked) {
      this.setState({image: this.props.poke.sprites.back,
      clicked: true})
    }
    else if (this.state.clicked) {
      this.setState({image: this.props.poke.sprites.front,
      clicked: false})
    }
  }

  render() {
    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className="image">
            <img src={this.state.image} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.poke.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.poke.stats[5].value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
