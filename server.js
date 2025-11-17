const express = require('express');
const colors = require('colors');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

//config dotenv
dotenv.config();

//rest object
const app = express();

//middlewares
app.use(cors()); 
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/test', require('./routes/testRoutes'));


app.get('/', (req, res) => {
    return res.status(200).send("Welcome to Food Hub API");
});

//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
    console.log(`Node Server is running on port ${PORT}`.bgBlue.gray);
})
