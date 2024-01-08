import mongoose from "mongoose";
const connection = {}
export const connectToDb = async () => {
    try {
        if(connection.isConnected){
            console.log("Using existing connection")
            return;
        }
        const db = await mongoose.connect('mongodb+srv://mamba:mamba2021@transport.jlugw.mongodb.net/next14?retryWrites=true');
        // const db = await mongoose.connect(process.env.MONGO_URL);
        connection.isConnected = db.connections[0].readyState;
        console.log(connection)
      } catch (error) {
        console.log(error);
        throw new Error(error)
      }
}