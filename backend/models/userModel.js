const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

// Generate an authentication token
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id }, config.secretKey);
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
