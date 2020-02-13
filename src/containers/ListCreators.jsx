import React, { Component } from 'react'
import CreatorItem from "../presentations/CreatorItem";
import { connect } from 'react-redux'
import { fetchCreators } from "../actions/CreatorAction"

class ListVideos extends Component {
  constructor(props) {
    super(props);
    //this.state = { videos: this.props.videos }
  }

  componentDidMount() {
    this.props.fetchCreators()
  }

  renderCreatorItem() {
    if (this.props.creators.length > 0) {
      return (
        <div className="columns is-multiline">
          {this.props.creators.map(creator => { return <CreatorItem key={creator.id} creator={creator} /> })}
        </div>
      )
    }

    return <h2 className="subtitle">No creators items to see</h2>
  }

  render() {
    return (
      <React.Fragment>
        {this.renderCreatorItem()}
      </React.Fragment> 
    )
  }
}

const mapStateToProps = state => ({
  creators: state.creators.items
})

export default connect(mapStateToProps, { fetchCreators })(ListVideos);
