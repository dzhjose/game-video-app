import PropTypes from 'prop-types';
import { Component } from 'react';

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
        <button className="tab-a">{label}</button>
      </li>
    );
  }
}

export default Tab;
