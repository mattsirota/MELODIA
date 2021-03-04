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
const my_client_secret = 'SECRET_KEY';
var auth_code = undefined;
var token = undefined;

app.get('/login', async (req, res) =>
{
    var scope = 'user-read-private user-read-email user-top-read';
    res.redirect('https://accounts.spotify.com/authorize?' +
        queryString.stringify({
        response_type: 'code',
        client_id: my_client_id,
        scope: scope,
        redirect_uri: redirect_uri,
      }));
}),
app.get('/login/authorize', async (req, res) =>
{
    if (req.query.code == undefined)
        res.send("Not authorized to view this page");
    else
    {
        auth_code = req.query.code
        token = await userData.getToken(my_client_id, my_client_secret, auth_code, redirect_uri);
        res.redirect('http://localhost:3000/artists');
    }
}),

app.get('/profile', async (req, res) =>
{
    if (token == undefined)
        res.send({"display_name": "Error: Must be logged in to view profile"});
    else
    {
        let info = await userData.getProfile(token.access_token);
        res.send(info);
    }

}),

app.get('/artists', async (req, res) =>
{
    if (token == undefined)
        res.send("Error: Must be logged in to view artists");
    else
    {
        let info = await userData.getArtists(token.access_token);
        res.json(info);
    }
});

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/ejona', (req, res) => {
    res.send('This is my new Endpoint')
});

app.get('/getWeatherNewYork', (req, res) => {
    request('http://api.weatherstack.com/current?access_key=bf0d2780f41b8c990868aba740f0bd9e&query=New%20York', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var parsedBody = JSON.parse(body);
            var temp_c = parsedBody['current']['temperature'];
            res.send({ temp_c });
        }

    });
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});