import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchGames } from '../actions/GamesAction'
import GameItem from "../presentations/GameItem";

class ListGames extends Component {
  componentDidMount(){
    this.props.fetchGames();
  }

  _renderGames(){
    if (this.props.games.length > 0) {
      return (
        <div className="columns is-multiline">
          {this.props.games.map(game => { return <GameItem key={game.id} game={game} /> })}
        </div>
      )
    }

    return <h2 className="subtitle">No games items to see</h2>
  }
  render() {
    return (
      <React.Fragment>
        {this._renderGames()}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  games: state.games.game_items
})

export default connect(mapStateToProps, { fetchGames }) (ListGames);