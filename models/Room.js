const mongoose = require("mongoose");
const { Schema } = mongoose;
const roomSchema = new Schema({
  roomName: {
    required: true,
    type: String,
  },

  createdBy: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  members: [
    {
      userId: { type: Schema.Types.ObjectId, ref: "User" },
      role: { type: String, default: "member" },
    },
  ],
});

const Room = mongoose.model("Room", roomSchema);
module.exports = Room;
