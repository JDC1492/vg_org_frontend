import React, { Component } from 'react';
import { connect } from 'react-redux';

class GameShowContainer extends Component {
    render() {
        return (
            <>
                <SingleGame/>   
            </>
        );
    }
}

const mapStateToProps = (state) =>{
    return{games: state}
}

export default connect(mapStateToProps) (GameShowContainer);
