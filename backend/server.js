const express = require('express');
const axios = require('axios');
const cors = require('cors')
require('dotenv').config();

const app = express();

app.use(cors())

const BASE_URL = 'https://od-api.oxforddictionaries.com/api/v2'
const APP_ID = process.env.APP_ID;
const APP_KEY = process.env.APP_KEY;

app.post('/', (req, res) => {
    axios.get(`${BASE_URL}/entries/en-gb/example`, {
        headers: {
            'app_id': APP_ID,
            'app_key': APP_KEY
        }
    })
    .then(data => res.json(data.data.results))
    .catch(err => console.log(err))
});

app.get('/', (req, res) => {
    res.send('lol')
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));