import connectDb from "../../../database/connect";
import pengeluaran from "../../../models/Pengeluaran"
export default async (req, res) => {
   const client = await connectDb()

   switch (req.method) {
      case "POST":
         let phone= req.body.phone;
      
         try {
            await client.collection("pengeluaran").createIndex({ "phone":1 }, { unique: true ,required:true})
            const pengeluaran = await client.collection("pengeluaran").insertOne({ "phone": phone })
            res.status(200).json(pengeluaran)
         } catch (error) {
            res.status(505).json({ kode: error.code, value: error, pesan: error.message })
         }
         break;

      default:
    const pengeluaran = await client.collection("pengeluaran").find().toArray()
      res.status(200).json(pengeluaran)
   }


}