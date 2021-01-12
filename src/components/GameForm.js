import React, { Component } from 'react';
import { addGame } from '../actions/actIndex';
import { connect } from 'react-redux';

class GameForm extends Component {
    constructor(props){
        super(props)
        this.state={
            title:"",
            release_year:"",
            console:"",
            developer:"",
            genre:"",
            description:"",
            cover_art:""
        }
    }
    

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = e => {
       e.preventDefault()
       this.props.addGame(this.state)    
       this.setState({
            title:"",
            release_year:"",
            console:"",
            developer:"",
            genre:"",
            description:"",
            cover_art:""
       })
    }

    render() {
        return (
            <div className="gameForm" >
                <form onSubmit={this.handleSubmit}>
                        <input type='text' name='title' placeholder='Title' value={this.state.title} onChange={(e) => this.handleChange(e)}/><br />
                        <input type='text' name='release_year' placeholder='Release Year' value={this.state.release_year} onChange={(e) => this.handleChange(e)}/><br />
                        <input type='text' name='console' placeholder='Console' value={this.state.console} onChange={(e) => this.handleChange(e)}/><br />
                        <input type='text' name='developer' placeholder='Developer' value={this.state.developer} onChange={(e) => this.handleChange(e)}/><br />
                        <input type='text' name='genre' placeholder='Genre' value={this.state.genre} onChange={(e) => this.handleChange(e)}/><br />
                        <input type='text' name='description' placeholder='Description' value={this.state.description} onChange={(e) => this.handleChange(e)}/><br />
                        <input type='text' name='cover_art' placeholder='Cover Art URL' value={this.state.cover_art} onChange={(e) => this.handleChange(e)}/><br />
                    <input type='submit' /><br /><br />
                </form>
                
            </div>
        );
    }
}

export default connect(null, { addGame })(GameForm);
