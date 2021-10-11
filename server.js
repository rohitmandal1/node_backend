import express from 'express';

const app = express();
const port = 8082;

app.get('/', (req, res) => {
    res.send('Welcome to backEnd side');
});

app.get('/users', (req, res) =>{
    res.send([{id: 1, name: "Rohit"}, {id: 2, name: "john"}]);
});

app.listen(port, () => console.log(`Server started on  PORT ${port}`));