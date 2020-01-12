import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    front: true
  }

  makeNameUpper = (lowerName) => {
    let upperName = lowerName.charAt(0).toUpperCase() + lowerName.slice(1)
    return upperName
  }

  findHp = (pokemon) => {
    let hpHash = pokemon.stats.find((stat) => {
      return stat.name === 'hp'
    })
    return hpHash.value
  }

  showSprite = () => {
    if (this.state.front) {
      return <img src={this.props.pokemon.sprites.front} alt="Oh oh!"/>
    } else {
      return <img src={this.props.pokemon.sprites.back} alt="Oh oh!"/>
    }
  }
  
  changeSide = () => {
    this.setState({
      front: !this.state.front
    })
  }

  render() {
    // console.log(this.props.pokemon.sprites.front)
    return (
      <Card>
        <div>
          <div onClick={this.changeSide} className="image">
            {/* <img src={this.props.pokemon.sprites.front} alt="Oh oh!"/> */}
            {this.showSprite()}
          </div>
          <div className="content">
            <div className="header">{this.makeNameUpper(this.props.pokemon.name)}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.findHp(this.props.pokemon)} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
