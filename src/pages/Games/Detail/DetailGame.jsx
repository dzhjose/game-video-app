import React from 'react';
import { useParams } from 'react-router-dom'
import GetGame from "../../../containers/GetGame";
import {Link} from 'react-router-dom'

const DetailGame = () => {
    const { id } = useParams();
    console.log(id)
    return (
        <React.Fragment>
            <div className="column">
                <Link to="/games"> 
                <span> Back </span>
                </Link>
            </div>
            <GetGame id={id} />
        </React.Fragment>
    );
}

export default DetailGame;
