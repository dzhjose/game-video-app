import React from 'react'
import PropTypes from 'prop-types'
import Tabs from "../components/Tabs/Tabs"

const showGenders = (genders) => {
    if (genders.length > 0) {
        return genders.map((g, i) => {
            return <li key={i} className="is-active"><a href="#">{g.name}</a></li>;
        });
    }
}

const DetailGameItem = (props) => {
    return (
        <React.Fragment>
            <Tabs>
                <div label="INFO">
                    <div className="box">
                        <article className="media">
                            {/* <div className="media-left">
                        <figure class="image is-64x64">
                          <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image" />
                        </figure>
                      </div> */}
                            <div className="media-content">
                                <div className="columns">
                                    <div className="column">
                                        <h2 className="subtitle">{props.game.name}</h2>
                                    </div>
                                    <div className="column is-narrow">
                                        <h2 className="subtitle">Released: {props.game.released}</h2>
                                    </div>
                                </div>
                                <div className="content" dangerouslySetInnerHTML={{ __html: props.game.description }}></div>
                                {props.game.genres.length > 0 ?
                                    <div className="column">
                                        <h3 className="subtitle">Genders</h3>
                                        <nav className="breadcrumb" aria-label="breadcrumbs">
                                            <ul>
                                                {showGenders(props.game.genres)}
                                            </ul>
                                        </nav>
                                    </div>
                                    : null
                                }
                                <div className="column">
                                    <figure className="image is-5by3">
                                        <img src={props.game.background_image} />
                                    </figure>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
                <div label="VIDEOS">
                    <div className="box">
                        <div className="media-content">
                            <video controls>
                                <source src={props.game.clip.clips.full} />
                            </video>
                        </div>
                    </div>
                </div>
                <div label="STORES">
                    <div className="box">
                        <div className="media-content">
                            <ul>
                                {props.game.stores.map((s) => {
                                    return <li key={s.id}><a href={s.url} target="_blank">{s.store.name}</a></li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </Tabs>
        </React.Fragment>
    )
}

DetailGameItem.propTypes = {
    game: PropTypes.object.isRequired
}

export default DetailGameItem

