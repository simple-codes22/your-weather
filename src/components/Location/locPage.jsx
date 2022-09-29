import React from 'react';
import { useParams } from 'react-router-dom';



const LocPage = () => {
    const { locationKey } = useParams();
    return (
        <div>
            {locationKey}
        </div>
    )
}

export default LocPage