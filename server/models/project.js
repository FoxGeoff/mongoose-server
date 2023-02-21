const mongoose = require('mongoose');

const projectSchema = mongoose.mongoose({
  name: { type: String },
  description: { type: String },
  isActive: { type: Boolean, default: true },
});
