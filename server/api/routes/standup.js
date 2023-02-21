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
