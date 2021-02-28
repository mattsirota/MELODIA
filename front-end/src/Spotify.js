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
        axios.get('/getWeatherNewYork').then(response => {
            this.setState({
                weather: response.data.temp_c
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