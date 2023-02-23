const Standup = require('../../models/standup');

module.exports = function (router) {
  // GET: the 6 newest stand-up meeting notes
  router.get('/standup', function (req, res) {
    Standup.find()
      .sort({ createdOn: 1 }).limit(6)
      .exec()
      .then((docs => res.status(200).json(docs)))
      .catch((err) =>
        res.status(500).json({
          message: 'Error finding standup meeting notes',
          error: err,
        })
      );
  });

  // GET: all stand-up meeting notes

  /*
  router.get('/standup', function (req, res) {
    Standup.find((err, standups) => {
      if(err) {
        return res.send(err);
      }
      res.json(standups);
    });
  });
*/

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
