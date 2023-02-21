const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// DB Connection
const conn = require('./db/conn');
conn();

// Routes
const router = require('./routes/router');
app.use('/api', router);

app.listen(3001, () => {
    console.log('Servidor iniciado na porta 3001');
});


// 