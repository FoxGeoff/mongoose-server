const Project = require('../../models/project');

module.exports = function (router) {
  //GET: List of active projects
  router.get('/project', function (req, res) {});

  // POST: create new project...
  router.post('/project', function (req, res) {
    let newProject = new Project(req.body);
    newProject.save(function (err, newProject) {
      if (err) {
        return res.status(400).json(err);
      }
      res.status(200).json(newProject);
    });
  });
};
