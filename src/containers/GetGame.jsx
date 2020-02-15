import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getGame } from "../actions/GamesAction"
import DetailGameItem from "../presentations/DetailGameItem"
import Tabs from "../components/Tabs/Tabs"

class GetGame extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getGame(this.props.id);
  }


  render() {
    return (
      <div>
        <Tabs>
          <div label="INFO">
            INFO
          </div>
          <div label="VIDEOS">
            VIDEOS
          </div>
          <div label="STORES">
            STORES
          </div>
        </Tabs>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  game: state.games.game_item
})

export default connect(mapStateToProps, { getGame })(GetGame);
