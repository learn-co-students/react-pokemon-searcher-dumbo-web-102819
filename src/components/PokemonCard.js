import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    isFlipped: false
  }

  handleFlip = ()=> {
    this.setState({
      isFlipped: !this.state.isFlipped
    })

    //console.log("erfgh,.")
  }

  render() {
    return (
      <Card onClick={()=> {this.handleFlip()}}>
        <div>
          <div className="image">
            {this.state.isFlipped ? <img src={this.props.backImage} alt="poki image" /> : <img src={this.props.frontImage} alt="poki image" />}
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
