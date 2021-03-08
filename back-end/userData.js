const fetch = require("node-fetch");
const btoa = require("btoa");
const queryString = require('query-string');

header = (token) => {
    return {
        method: 'GET',
        headers: 
        {
            'Authorization' : 'Bearer ' + token
        }
    }
}

const exportedMethods =
{
    async getArtists(token)
    {
        const result = await fetch('https://api.spotify.com/v1/me/top/artists', header(token));
        const data = await result.json();
        return data;
    },

    async getArtistsByTimeRange(token, time_range)
    {
        const result = await fetch('https://api.spotify.com/v1/me/top/artists?time_range=' + time_range, header(token));
        const data = await result.json();
        return data;
    },
    
    async getTracks(token)
    {
        const result = await fetch('https://api.spotify.com/v1/me/top/tracks', header(token));
        const data = await result.json();
        return data;
    },
    
    async getTracksByTimeRange(token, time_range)
    {
        const result = await fetch('https://api.spotify.com/v1/me/top/tracks?time_range=' + time_range, header(token));
        const data = await result.json();
        return data;
    },
    
    async getRecents(token)
    {
        const result = await fetch('https://api.spotify.com/v1/me/player/recently-played', header(token));
        const data = await result.json();
        return data;
    },
    
    async getProfile(token)
    {
        const result = await fetch('https://api.spotify.com/v1/me', header(token));
        const data = await result.json();
        return data;
    },
    
    async getToken(my_client_id, my_client_secret, auth_code, redirect_uri)
    {
        const result = await fetch('https://accounts.spotify.com/api/token', 
        {
            method: 'POST',
            headers:
            {
                'Content-Type' : 'application/x-www-form-urlencoded',
                'Authorization' : 'Basic ' + btoa(my_client_id + ':' + my_client_secret)
            },
            body:
                queryString.stringify({
                grant_type : 'authorization_code',
                code : auth_code,
                redirect_uri : redirect_uri
            })
        });

        let token = await result.json();
        return token;
    }
};

module.exports = exportedMethods;