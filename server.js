const express = require('express');

//rest object
const app = express();

//routes
app.get('/', (req, res) => {
    return res.status(200).send("Welcome to Food Hub");
});

//port
const PORT = 3000;

//listen
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
