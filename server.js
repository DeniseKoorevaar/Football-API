const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const port = 1234;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/countries', (req, res) => {
    fetch('https://apiv2.apifootball.com/?action=get_countries&APIkey=00622ffc4e658e817b2bb7784792054a440bfa0ed9d383619ff21f748dc9dcc3')
        .then(response => response.json())
        .then(data => res.send(JSON.stringify(data)))
});

app.get('/competitions', (req, res) => {
    let id = req.query.id;
    fetch(`https://apiv2.apifootball.com/?action=get_leagues&country_id=${id}&APIkey=00622ffc4e658e817b2bb7784792054a440bfa0ed9d383619ff21f748dc9dcc3`)
        .then(response => response.json())
        .then(data => res.send(JSON.stringify(data)))
});

// app.get('/teams/:id', (req, res) => {
//     fetch('https://apiv2.apifootball.com/?action=get_teams&league_id=148&APIkey=00622ffc4e658e817b2bb7784792054a440bfa0ed9d383619ff21f748dc9dcc3')
//     .then(response => response.json())
//     .then(data => res.send(JSON.stringify(data)))
// });

// app.get('/players/name', (req, res) => {
//     fetch('https://apiv2.apifootball.com/?action=get_players&player_name=ronaldo cristiano&APIkey=00622ffc4e658e817b2bb7784792054a440bfa0ed9d383619ff21f748dc9dcc3')
//     .then(response => response.json())
//     .then(data => res.send(JSON.stringify(data)))
// });

// app.get('/standings', (req, res) => {
//     fetch('https://apiv2.apifootball.com/?action=get_standings&league_id=148&APIkey=00622ffc4e658e817b2bb7784792054a440bfa0ed9d383619ff21f748dc9dcc3')
//     .then(response => response.json())
//     .then(data => res.send(JSON.stringify(data)))
// });


app.listen(port, () => console.log('Server listening on port ' + port));
