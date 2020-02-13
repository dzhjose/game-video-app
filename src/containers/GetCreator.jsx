import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getItem} from '../actions/CreatorAction';
import DetailCreator from '../presentations/DetailCreator';

class GetCreator extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getItem(this.props.id);
  }
  render() {
    return (
      <React.Fragment>
        <DetailCreator creator={this.props.creator}/>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  creator: state.creators.item
})

export default connect(mapStateToProps, {getItem}) (GetCreator);
