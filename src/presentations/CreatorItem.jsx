import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const CreatorItem = (props) => {
  return (
    <div className="column is-12-mobile is-6-tablet is-4-desktop is-3-widescreen">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={props.creator.image_background} alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src={props.creator.image} alt="Placeholder image" className="image is-48x48" />
              </figure>
            </div>
            <div className="media-content">
              <Link to={`/creators/detail/${props.creator.id}`} className="subtitle is-5">
                {props.creator.name}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


CreatorItem.propTypes = {
  creator: PropTypes.object.isRequired
};


export default CreatorItem;
