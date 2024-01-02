import mongoose from "mongoose"

const Connection = async (username, password) => {
    const URL="mongodb+srv://ibtsamsohail:mongo12345@cluster0.irr8qij.mongodb.net/?retryWrites=true&w=majority";
    try{
        await mongoose.connect(URL, { useNewUrlParser : true});
        console.log("Database Connected Successfully")
    }catch(error){
        console.log("Error while connecting to database ", error)
    }
}

export default Connection;