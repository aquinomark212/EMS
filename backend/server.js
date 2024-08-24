require('dotenv').config();
const express = require('express');
const connectDB = require('./db');
const cors = require('cors');
const publicRoutes = require('./routes/publicRoutes');
const privateRoutes =require('./routes/privateRoutes');


const  app = express();

connectDB();


app.use(express.json());
app.use(cors());

app.use('/', publicRoutes);
app.use('/', privateRoutes);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log('listening on PORT:', PORT);
});

