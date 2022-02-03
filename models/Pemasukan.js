import mongoose from "mongoose";

const PemasukanSchema = new mongoose.Schema({
   nama: {
      type: String,
   }
})
module.exports = mongoose.models.Pemasukan || mongoose.model("Pemasukan", PemasukanSchema);