const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    password: { type: String, minLength: 3, trim: true },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      match: /.+@.+\.\w+/,
    },
    contactedBy: { type: Schema.Types.ObjectId, default: null, ref: "Admin" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
