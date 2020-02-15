import React from 'react';
import PropTypes from 'prop-types';


const Content = (props) => {
  return (
    <div className="content is-small">
      {props.content}
    </div>
  );
};


Content.propTypes = {
  content: PropTypes.string.isRequired
};


export default Content;
