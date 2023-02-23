const TeamMember = require('../../models/teamMember');

module.exports = function (router) {
  //GET: List of TeamMembers
  /* http://localhost:8082/api/teamMember */
  router.get('/teamMember', function (req, res) {
    TeamMember.find()
      .sort({'name':1})
      .exec()
      .then((docs => res.status(200).json(docs)))
      .catch((err) =>
        res.status(500).json({
          message: 'Error finding team member list',
          error: err,
        })
      );
  });

  // POST: Create newTeamMember document...
  /* http://localhost:8082/api/teamMember */
  router.post('/teamMember', function (req, res) {
    let newTeamMember = new TeamMember(req.body);
    newTeamMember.save(function (err, newTeamMember) {
      if (err) {
        return res.status(400).json(err);
      }
      res.status(200).json(newTeamMember);
    });
  });
};
