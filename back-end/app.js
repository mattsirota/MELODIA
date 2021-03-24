const express = require('express');
var request = require('request');
const cors = require('cors');

const app = express();
const port = 5000;
app.use(cors());

const queryString = require('query-string');
const userData = require('./userData');

const my_client_id = '183edbaeffc94b3694e9153488fbf9b5';
const redirect_uri = 'http://localhost:5000/login/authorize';
//replace my_client_secret with your client secret code
const my_client_secret = 'SECRET';
var auth_code = undefined;
var token = undefined;

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/login', async (req, res) => {
    var scope = 'user-read-private user-read-email user-top-read user-read-recently-played playlist-modify-public playlist-modify-private playlist-read-private';
    res.redirect('https://accounts.spotify.com/authorize?' +
        queryString.stringify({
            response_type: 'code',
            client_id: my_client_id,
            scope: scope,
            redirect_uri: redirect_uri,
        }));
}),

    app.get('/login/authorize', async (req, res) => {
        if (req.query.code == undefined)
            res.send("Not authorized to view this page");
        else {
            auth_code = req.query.code
            token = await userData.getToken(my_client_id, my_client_secret, auth_code, redirect_uri);
            res.redirect('http://localhost:3000/home');
        }
    }),

    app.get('/profile', async (req, res) => {
        if (token == undefined)
            res.send({ "display_name": "Error: Must be logged in to view profile" });
        else {
            let info = await userData.getProfile(token.access_token);
            res.send(info);
        }

    }),

    app.get('/artists', async (req, res) => {
        if (token == undefined)
            res.send("Error: Must be logged in to view artists");
        else {
            let info = await userData.getArtists(token.access_token);
            res.json(info);
        }
    });

app.get('/artists/:time_range', async (req, res) => {
    if (token == undefined)
        res.send("Error: Must be logged in to view artists");
    else {
        let info = await userData.getArtistsByTimeRange(token.access_token, req.params.time_range);
        res.json(info);
    }
});

app.get('/tracks', async (req, res) => {
    if (token == undefined)
        res.send("Error: Must be logged in to view tracks");
    else {
        let info = await userData.getTracks(token.access_token);
        res.json(info);
    }
});

app.get('/tracks/:time_range', async (req, res) => {
    if (token == undefined)
        res.send("Error: Must be logged in to view tracks");
    else {
        let info = await userData.getTracksByTimeRange(token.access_token, req.params.time_range);
        res.json(info);
    }
});

app.get('/recommendations/:artist_seed/:genre/:track_seed', async (req, res) => {
    if (token == undefined)
        res.send("Error: Must be logged in to view recents");
    else {
        let info = await userData.getReco(token.access_token, req.params.artist_seed, req.params.genre, req.params.track_seed);
        res.json(info);
    }
});

app.get('/recents', async (req, res) => {
    if (token == undefined)
        res.send("Error: Must be logged in to view recents");
    else {
        let info = await userData.getRecents(token.access_token);
        res.json(info);
    }
});
app.get('/createPlaylist', async (req, res) => {
    if (token == undefined)
        res.send("Error: Must be logged in to create playlist");
    else {
        let info = await userData.getProfile(token.access_token);
        let user_id = info.id
        let newPlaylist = await userData.createPlaylist(user_id, token.access_token, "Test Playlist", "Top 20 songs last 6 months", true);
        let playlist_id = newPlaylist.id;
        //for now we're getting the top songs directly in here
        //when front end is working, it will pass the id's of the
        //songs to be used in songs list below
        let songData = await userData.getTracksByTimeRange(token.access_token, 'medium_term');
        songsList = songData.items;
        songs = [];
        for (let i = 0; i < songsList.length; i++)
        {
            songs[i] = "spotify:track:" + songsList[i].id
        }

        let result = await userData.addSongs(playlist_id, token.access_token, songs);
        res.json(result);
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

