import React, { Component } from 'react';

class GameForm extends Component {
    constructor(){
        super()
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

    }


    render() {
        return (
            <div className="gameForm" >
                <form onSubmit={this.handleSubmit}>
                    <label>Title</label>
                        <input type='text' name='title' value={this.state.title} onChange={(e) => this.handleChange(e)}/>
                    <label>Release Year</label>
                        <input type='text' name='release_year' value={this.state.release_year} onChange={(e) => this.handleChange(e)}/>
                    <label>Console</label>
                        <input type='text' name='console' value={this.state.console} onChange={(e) => this.handleChange(e)}/>
                    <label>Developer</label>
                        <input type='text' name='developer' value={this.state.developer} onChange={(e) => this.handleChange(e)}/>
                    <label>Genre</label>
                        <input type='text' name='genre' value={this.state.genre} onChange={(e) => this.handleChange(e)}/>
                    <label>Description</label>
                        <input type='text' name='description' value={this.state.description} onChange={(e) => this.handleChange(e)}/>
                    <label>Cover Art URL</label>
                        <input type='text' name='cover_art' value={this.state.cover_art} onChange={(e) => this.handleChange(e)}/>
                    <input type='submit' />
                </form>
                
            </div>
        );
    }
}

export default GameForm;
