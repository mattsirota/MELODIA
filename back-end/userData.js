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

    async getReco(token,artist_seed, genre, track_seed)
    {
        const result = await fetch(`https://api.spotify.com/v1/recommendations?seed_artists=${artist_seed}&seed_genres=${genre}&seed_tracks=${track_seed}`, header(token));
        const data = await result.json();
        return data;
    },

    async getGenresReco(token, genre)
    {
        const result = await fetch(`https://api.spotify.com/v1/recommendations?seed_genres=${genre}`, header(token));
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
    },
    async createPlaylist(user_id, token, name, description, public)
    {
        const result = await fetch('https://api.spotify.com/v1/users/' + user_id + '/playlists', 
        {
            method: 'POST',
            headers: 
            {
                'Authorization' : 'Bearer ' + token
            },
            body:
                JSON.stringify({
                "name": name,
                "description": description,
                "public": public
            })
        });

        const data = await result.json();
        return data;
    },
    async addSongs(playlist_id, token, songs)
    {
        const result = await fetch('https://api.spotify.com/v1/playlists/' + playlist_id + '/tracks', 
        {
            method: 'POST',
            headers: 
            {
                'Authorization' : 'Bearer ' + token,
                'Content-Type' : 'application/json'
            },
            body:
                JSON.stringify({
                "uris": songs
            })
        });

        const data = await result.json();
        return data;
    },
    async getArtistTopTracks(token, id)
    {
        const result = await fetch('https://api.spotify.com/v1/artists/' + id + '/top-tracks?market=US', header(token));
        const data = await result.json();
        return data;
    }
};

module.exports = exportedMethods;