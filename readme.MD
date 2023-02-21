# Projet Fundamentals of Mongoose for Node and MongoDB

## Introduction

1. Video Ref: <https://app.pluralsight.com/course-player?clipId=8bfd969e-0cbc-4697-b323-7fcbf5c1ce96>

### Task: Setup Server

1. Run 'npm init' to generate package.json file
2. Run 'npm i express'
3. Run 'npm i body-parser'
4. Run 'npm  i cors'
5. Run 'npm i mongoose'
6. Run 'npm i eslint'
7. Run 'eslint.js' --init' (in server folder)
8. To add eslint config file ref. project 'rest-api'
9. Run 'npm i morgan' (for login errors)
10. Run 'npm i nodemon -D'

### Task: Demo: Develop the Express API

1. Video Ref: <https://app.pluralsight.com/course-player?clipId=8bfd969e-0cbc-4697-b323-7fcbf5c1ce96>   @ 4:55/8:42
2. Add folder/file: server/api/index.js server/api/routes/standup.js & project.js & team.js

```javascript
/* server/api/routes/project (+2other routes)  */
module.exports = function (router) {
    //GET: List of active projects
    router.get('/project', function (req, res) {

    });
}

/* server/api/inde.js */

const express = require('express');
const router = express.Router();

require('./routes/standup')(router); 
require('./routes/project')(router); 
require('./routes/team')(router); 

 module.exports = router;
 ```

1. add scripts to package.json

```json
...
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "npm run lint & nodemon app.jd",
    "lint": "./node_modules/.bin/eslint **/*.js"
  },
...
```

### Task: Demo: Vue.js and Vuetify

1.Video Ref: <https://app.pluralsight.com/course-player?clipId=d653e65f-c36b-4db7-a9d7-82be3d7235d9>
2. Adding: vue-cli, Vuetify, Vuex and Axios
3. Run: 'npm -i -g add @vue/cli'
4. Run: 'Github\mongoose\> vue create client'
5. STEP #1: Run:'cd client' and Run:'npm run serve' ( <http://localhost:8080/> )
6. STEP #2: client/> 'vue add vuetify' <<
7. STEP #3: goto: <https://vuetifyjs.com/en/wireframes/baseline/> (Click and goto gihub for code)
8. FOR THIS APP SKIP #3 AND COPY CODE: <https://github.com/tripletdad99/vue-standupstandups-client>
9. in folder 'client' RUN: 'npm install' and add '.gitignore'
10. in folder 'client' RUN 'npm add material-design-icons-iconfont' RUN: 'npm add axios'

### Task: Fix Error eslint (project: client)

1. Ref: <https://eslint.org/docs/latest/use/getting-started>
2. Manually Add file: '.eslintrc.json'

## Kanban Task: Setting up MongoDB Database

1. Video Ref: <https://app.pluralsight.com/course-player?clipId=0acc1d4b-e16b-4537-af66-0954f85523d0>

### Task: The Virtual Database Setup

## Kanban Task: Building the Mongoose Schema

1. Video clip #5: Everything starts with a schema <https://app.pluralsight.com/course-player?clipId=bc5e044a-e0a3-4627-aea4-ee2ca3a14d64>
2. Demo Schema <https://app.pluralsight.com/course-player?clipId=e461508b-bfa0-4d2f-bedf-04d38aa945ac>
3. Create file(s): server/models/standup.js, project.js and teamMeber.js

```javascript
// code for schema (standupSchema.js)
const mongoose = require('mongoose');

const standupSchema = new mongoose.Schema({
  teamMember: { type: String },
  project: { type: String },
  workYesterday: { type: String },
  workToday: { type: String },
  impediments: { type: String },
  createdOn: { type: Date, default: Date.now },
});
```

## Kanban Task: Building a model

1. Video Clip: <https://app.pluralsight.com/course-player?clipId=21b2aabb-46c1-43fc-9992-52c774e75323>
2. Video Clip: <https://app.pluralsight.com/course-player?clipId=ff9b32ce-d51c-4466-bb4d-caf1ede8ed6b>
3. Demo: Build a model

```javascript
...
// code for schema (standupSchema.js)
...
...
// Export the model from the schema
module.exports = mongoose.model('Standup', standupSchema);
```

1. Develop the routes eg routes/standup.js

```javascript
/* server/api/routes/standup.js */
const Standup = require('../../models/standup');

module.exports = function (router) {
  // GET: the 12 newest stand-up meeting notes
  router.get('/standup', function (req, res) {});

  // POST: Create new Standup note...
  router.post('/standup', function (req, res) {
    let newStandupNote = new Standup(req.body);
    newStandupNote.save(function (err, newStandupNote) {
      if (err) {
        return res.status(400).json(err);
      }
      res.status(200).json(newStandupNote);
    });
  });
};
```

### Task: Connect to MongoDb

1. Update app.js

```javascript

```
