const express = require('express');
const router = express.Router();

require('./routes/standup')(router); 
require('./routes/project')(router); 
require('./routes/teamMember')(router); 

 module.exports = router;