const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
   name: {
      type: String,
      require: [true, "Nama tidak boleh kosong!"]
   }
})
module.exports = mongoose.models.User || mongoose.model("User", UserSchema);