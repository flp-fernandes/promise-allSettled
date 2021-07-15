const express = require('express');
const app = express();

app.use(express.json());

app.get('/1', (req, res) => {
    console.log('foi 1');
    setTimeout(() => {
        res.send({
            msg: 'ok do 1'
        })
    }, 2000)
})
app.get('/2', (req, res) => {
    console.log('foi 2');
    setTimeout(() => {
        res.send({
            msg: 'ok do 2'
        })
    }, 1000)
})
app.get('/3', (req, res) => {
    console.log('foi 3');
    setTimeout(() => {
        res.status(400).send({
            msg: 'ok do 3'
        })
    }, 2000)
})

app.listen(3000, () => console.log('is working on port 3000'));