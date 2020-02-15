import React from 'react';
import { useParams } from 'react-router-dom'
import GetGame from "../../../containers/GetGame";

const DetailGame = () => {
    const { id } = useParams();
    console.log(id)
    return (
        <React.Fragment>
            <GetGame id={id} />
        </React.Fragment>
    );
}

export default DetailGame;
