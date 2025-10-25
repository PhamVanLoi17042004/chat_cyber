const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },

  password: {
    type: String,
    required: true,
  },

  isOnline: {
    type: Boolean,
    default: false,
  },

  friends: [
    {
      userId: { type: Schema.Types.ObjectId, ref: "User" },
      status: { type: String, enum: ["pending", "accepted", "blocked"] },
      requestedBy: { type: Schema.Types.ObjectId, ref: "User" },
    },
  ],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
