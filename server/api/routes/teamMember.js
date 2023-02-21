const TeamMember = require('../../models/teamMember');

export default function (router) {
  //GET: List of TeamMembers
  router.get('/teamMember', function (req, res) {

  });

  // POST: Create newTeamMember document...
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
