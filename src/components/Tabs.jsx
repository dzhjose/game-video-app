import React, { Component } from 'react'

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = { labels: [] }
  }

  componentDidMount() {
    this.setState({ labels: [{ 'label': 'INFO', 'active': true }, { 'label': 'VIDEOS', 'active': false }, { 'label': 'STORES', 'active': false }] });
  }

  _changeTab = label => {
    this.setState(prevState => ({
      labels: prevState.labels.map(r => {
        if (r.label == label.label) {
          return { label: r.label, active: true }
        }
        return { label: r.label, active: false }
      })
    }))
  }

  _renderTabs() {
    return (
      <ul>
        {this.state.labels.map((label, index) => {
          return <li key={index} onClick={() => this._changeTab(label)} className={label.active ? 'is-active' : ''}><a className="tab-a">{label.label}</a></li>
        })}
      </ul>
    )
  }

  _renderContentTabs() {
    return (
      <div>
        {this.state.labels.map((l, index) => {
          return (
            <React.Fragment>
              {
                l.active == true ?
                  <div key={index} className="content is-small">
                    {l.label}
                  </div> : null
              }
            </React.Fragment>
          )
        })}
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className="tabs is-right">
          {this._renderTabs()}

          {/* <ul>
            <li className="is-active"><a className="tab-a">INFO</a></li>
            <li><a >VIDEOS</a></li>
            <li><a className="tab-a">STORES</a></li>
          </ul> */}
        </div>
        {this._renderContentTabs()}
      </div>
    )
  }
}

export default Tabs
