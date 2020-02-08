import React, { Component } from 'react'
import VideoItem from "../components/VideoItem";
import axios from 'axios';

class ListVideos extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] }
  }

  _handelRequest() {
    axios.get('https://api.rawg.io/api/creators').then(rs => {
      console.log(rs.data);
      this.setState({ videos: rs.data.results });
    })
  }

  componentDidMount() {
    this._handelRequest();
  }

  renderVideoItem() {
    if (this.state.videos.length > 0) {
      return (
        <div className="columns is-multiline">
          { this.state.videos.map(video => { return <VideoItem key={video.id} video={video} />})}
      </div>
      )
    }

    return <h2 className="subtitle">No videos items to see</h2>
  }

  render() {
    return (
      <div>
        {this.renderVideoItem()}
      </div>
    )
  }
}

export default ListVideos;
