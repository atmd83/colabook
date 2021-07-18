const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/availability/:brand', (req, res) => {
    if(process.env.ERRORS) {
        return res.status(500).send({
            message: 'Oops, something went wrong'
        });
    }
    return res.json(require('./mock/data/times'));
});

app.get('/availability/:brand/:time', (req, res) => {
    if(process.env.ERRORS) {
        return res.status(500).send({
            message: 'Oops, something went wrong'
        });
    }
    return res.json(require('./mock/data/availability'));
});

app.post('/bookings', (req, res) => {
    if(process.env.ERRORS) {
        return res.status(500).send({
            message: 'Oops, something went wrong'
        });
    }
    return res.json(require('./mock/data/booking'));
});

app.delete('/bookings/:id', (req, res) => {
    if(process.env.ERRORS) {
        return res.status(500).send({
            message: 'Oops, something went wrong'
        });
    }
    return res.json(require('./mock/data/bookingDeleted'));
});

app.get('/bookings/:email', (req, res) => {
    if(process.env.ERRORS) {
        return res.status(500).send({
            message: 'Oops, something went wrong'
        });
    }
    return res.json(require('./mock/data/bookingByEmail'));
});

app.listen(3001, () => console.log('mock api running on port 3001'));