import React, { Component } from 'react';
import axios from 'axios';

export default class Spotify extends Component {
    constructor() {
        super();
        this.state = {
            weather: "Not yet gotten"
        }
    }
    handleButtonClick = () => {
        axios.get('/login').then(response => {
            this.setState({
                weather: 500
            });
        });
    };

    render() {
        return (
            <div>
                <button onClick={this.handleButtonClick}>Login to Spotify</button>
                <h1>The login in Spotify is: {this.state.weather}</h1>
            </div>
        )
    }

}