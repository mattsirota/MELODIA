const express=require("express");
const router=express.Router();
const queryString = require('query-string');
const data = require("../data");
const userData = data.userData;
const fetch = require("node-fetch");

const my_client_id = '183edbaeffc94b3694e9153488fbf9b5';
const redirect_uri = 'http://localhost:3000/login/authorize';
const my_client_secret = 'fec9226811a04cd5a4e36d079ba2a90e';
var auth_code = undefined;
var token = undefined;

router.get('/', async (req, res) =>
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
router.get('/authorize', async (req, res) =>
{
    if (req.query.code == undefined)
        res.send("Not authorized to view this page");
    else
    {
        auth_code = req.query.code
        token = await userData.getToken(my_client_id, my_client_secret, auth_code, redirect_uri);
        res.redirect('http://localhost:3000/login/profile');
    }
}),

router.get('/profile', async (req, res) =>
{
    if (token == undefined)
        res.send("Error: Must be logged in to view profile");
    else
    {
        let info = await userData.getProfile(token.access_token);
        res.json(info);
    }
}),

router.get('/profile/artists', async (req, res) =>
{
    if (token == undefined)
        res.send("Error: Must be logged in to view artists");
    else
    {
        let info = await userData.getArtists(token.access_token);
        res.json(info);
    }
});

module.exports=router;