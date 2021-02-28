const express = require('express');
var request = require('request');
const app = express();
const port = 5000;

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