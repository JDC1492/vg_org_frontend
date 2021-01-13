import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleGame from '../components/SingleGame';

class GameShowContainer extends Component {
    render() {
        return (
            <div>
                <SingleGame games={this.props.games}/>   
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{games: state}
}

export default connect(mapStateToProps)(GameShowContainer);