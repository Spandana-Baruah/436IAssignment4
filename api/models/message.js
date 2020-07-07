const mongoose = require('mongoose');

const messageSchema = {
  text: String
};

module.exports = mongoose.model("Message", messageSchema, "Messages");
