import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom"


const DetailCreator = (props) => {
  return (
    <div className="box">
      <nav className="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li><Link to="/creators">Creators</Link></li>
          <li className="is-active"><a href="#" aria-current="page">Detail</a></li>
        </ul>
      </nav>
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={props.creator.image} alt="Image" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{props.creator.name}</strong>
              <br />
            </p>
            <section dangerouslySetInnerHTML={{ __html: props.creator.description }}></section>
          </div>
        </div>
      </article>
    </div>
  );
};


DetailCreator.propTypes = {
  creator: PropTypes.object.isRequired
};


export default DetailCreator;
