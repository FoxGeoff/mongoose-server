const mongoose = require('mongoose');

const standupSchema = new mongoose.Schema({
  teamMember: { type: String },
  project: { type: String },
  workYesterday: { type: String },
  workToday: { type: String },
  impediments: { type: String },
  createdOn: { type: Date, default: Date.now },
});

// Export the model
module.exports = mongoose.model('Standup', standupSchema);

/*
// Disable _id schema example
const noIdSchema = new mongoose.Schema({ name: String }, { _id: false });

// User Schema.add() example
let exampleSchema = new mongoose.Schema();

// exampleSchema.add({ teamMember: String });

// Example #2 add schema
const useFullName = true; // Some business rule

if (useFullName) {
  exampleSchema.add({
    teamMember: {
      first: String,
      last: String,
    },
  });
} else {
  exampleSchema.add({ teamMember: String });
}
*/
