const helmet = require('helmet');
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const api = require('./routes/api');

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(helmet());
app.use('/api', api);

mongoose.connect(process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log('Connected sucessfully to MongoDB...'))
    .catch(err => console.log(err));

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));

module.exports = app;