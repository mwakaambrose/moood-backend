const express = require('express')
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

// my controller
const moods = require('./src/api').moods;

// Set up the express app
const app = express();
const port = 3000

app.use(cors());

// Log requests to the console.
app.use(logger('dev'));
// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send("You have reached Mooods' backend, stop poking around now.")
});

app.get('/moods', (req, res) => {
    moods.list(req, res)
});

app.get('/moods-limited-eight', (req, res) => {
    moods.listLimit(req, res)
});

app.post('/moods', (req, res) => {
    moods.add(req, res)
});

app.listen(port, () => console.log(`Moood app listening on port ${port}!`))