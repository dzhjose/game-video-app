import React from 'react';
import { useParams } from 'react-router-dom'
import GetCreator from "../../../containers/GetCreator";


const DetailPage = () => {
    const { id } = useParams();
    return (
        <React.Fragment>
            <GetCreator id={id} />
        </React.Fragment>
    );
};

export default DetailPage;
