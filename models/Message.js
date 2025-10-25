const mongoose = require("mongoose");
const { Schema } = mongoose;
const messageSchema = new Schema({
  content: {
    type: String,
  },

  senderId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  roomId: {
    type: Schema.Types.ObjectId,
    ref: "Room",
  },

  receiverId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  sentAt: {
    type: Date,
    default: Date.now,
  },
});

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
