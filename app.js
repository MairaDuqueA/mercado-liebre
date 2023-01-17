const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;


app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname, '/views/index.html'));
});

app.get('/register', (req, res) =>{
    res.sendFile(path.resolve(__dirname, '/views/register.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});


// const publicPath = path.resolve(__dirname, './views');
// app.use(express.static(publicPath));