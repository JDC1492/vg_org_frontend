import React from 'react';
import { useHistory } from "react-router-dom"

const BackLink = () => {
    const history = useHistory()
        return (
            <>
                <button onClick={() => {
                        history.goBack();
                    }}> Back to Games</button>
            </>
        );
}

export default BackLink;
