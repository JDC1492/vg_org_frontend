import React from 'react';
import { useHistory } from "react-router-dom"

const BackLink = () => {
    const history = useHistory()
        return (
            <>
                <button className='backButt' onClick={() => {
                        history.goBack();
                    }}> Back to Games</button>
            </>
        );
}

export default BackLink;
