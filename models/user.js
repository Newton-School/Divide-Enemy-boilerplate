const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    friends: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  },
  { timestamps: true }
);

userSchema.pre('save', function (next) {
  if (this.isNew) {
    this.friends = [];
  }
  next();
});

module.exports = mongoose.model("User", userSchema);