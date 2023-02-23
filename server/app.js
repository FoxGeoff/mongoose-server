const express = require('express');
const app = express();
const api = require('./api');
const morgan = require('morgan'); // logger
const bodyParser = require('body-parser');
const cors = require('cors');
const { default: mongoose } = require('mongoose');

//not set in package.json so = 8081
const port = process.env.PORT || 8081;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.use('/api', api);
app.use(express.static('static'));

app.use(morgan('dev'));

app.use(function (req, res) {
  const err = new Error('Not Found');
  err.status = 404;
  res.json(err);
});

// Add MongoDB connection
const mogoose = require('mongoose');

//new requirement to fix error
mongoose.set('strictQuery', false);

mongoose.connect('mongodb://127.0.0.1/virtualstandups');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
  console.log('Connected to MongoDb');

  app.listen(port, () => {
    console.log(`API Server Listening on port ${port}`);
  });
 
});
