import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    console.log("click")
    onClick(label);
  }

  render() {
    const {
      onClick,
      props: {
        activeTab,
        label,
      },
    } = this;

    console.log(this.props)

    let className = 'tab-list-item';

    if (activeTab === label) {
      className += ' is-active';
    }

    return (
      <li
        className={className}
        onClick={onClick}
      >
        <a className="tab-a">{label}</a>
      </li>
    );
  }
}

export default Tab;