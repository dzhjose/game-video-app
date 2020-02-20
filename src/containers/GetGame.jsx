import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getGame } from "../actions/GamesAction"
import DetailGameItem from "../presentations/DetailGameItem"

class GetGame extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getGame(this.props.id);
  }

  _renderGameDetail(){
    if(Object.keys(this.props.game).length > 0){
      return <DetailGameItem game={this.props.game} />
    }

    return (
      <div>
        <h2>No game detail</h2>
      </div>
    );
  }


  render() {
    return (
      <React.Fragment>
        {this._renderGameDetail()}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  game: state.games.game_item
})

export default connect(mapStateToProps, { getGame })(GetGame);
