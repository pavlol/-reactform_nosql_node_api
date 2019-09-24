const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./router');
const app = express();
const dbConnection = process.env.NODE_ENV === 'production' ? process.env.dbConnectionString : require('./localSettings').dbConnectionString;

//DB setup
const db = dbConnection;  //or mongoose.connect('mongodb://localhost:27017/dbname');
var promise = mongoose.connect(db, {
});

// App setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({type: '*/*'}));
router(app);

const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('server listening on:', port);
