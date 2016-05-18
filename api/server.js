var express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser');

import { CardsController } from './controllers';

var app = new express();

// For CORS
app.use(cors());

// For POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configure default PORT
var port = process.env.PORT || 3000;

// Configure default Environment
var env = process.env.NODE_ENV || 'development';

// Routes for API
var router = express.Router();

router.get('/', function (req, res) {
    res.json({ message: 'hooray! welcome to simple Card API!' });
});

// Register routes
app.use('/v1', router);

new CardsController(app);

// Start server
app.listen(port);
console.log('Api listening in http://localhost:' + port);
