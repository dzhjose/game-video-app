import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const GameItem = (props) => {
  return (
    <div className="column is-12-mobile is-6-tablet is-4-desktop is-3-widescreen">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={props.game.background_image} alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media-content">
            <Link to={`/games/detail/${props.game.id}`} className="subtitle is-5">
              {props.game.name}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};


GameItem.propTypes = {
  game: PropTypes.object.isRequired
};


export default GameItem;
