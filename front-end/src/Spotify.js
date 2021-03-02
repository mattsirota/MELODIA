import React, { Component } from 'react';
import axios from 'axios';

export default class Spotify extends Component {
    constructor() {
        super();
        this.state = {
            status: "Click profile to see status"
        }

    }
    //this is just to show functionality for now
    //since we dont have more pages
    //localhost:5000/login is currently just redirecting back to this page
    profileClick = () => {
        axios.get('/profile').then(response => {
            console.log(response);
            this.setState({
                status: response.data.display_name
            });
        });
    };

    render() {
        return (
            <div>
                <a href="http://localhost:5000/login"><button>Sign In With Spotify</button></a>
            </div>
        )
    }

}