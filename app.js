const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static("public")); 
app.use(express.static("views"));

app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname, '/index.html'));
});

app.get('/register', (req, res) =>{
    res.sendFile(path.resolve(__dirname, '/register.html'));
});

app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname, '/login.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});