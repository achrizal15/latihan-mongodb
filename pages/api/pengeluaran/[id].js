import { ObjectId } from "mongodb";
import connectDb from "../../../database/connect";

export default async (req, res) => {
   const db = await connectDb()
   const params = req.query.id;
   try {
      await db.collection("pengeluaran").deleteOne({ "_id": ObjectId(params) })
      res.status(200).json({ "status": 200, message: "data has been deleted" })
   } catch (error) {
      res.status(505).json({ "status": 505, "message": error.message })
   }

}