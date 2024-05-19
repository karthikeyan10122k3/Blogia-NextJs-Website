import mongoose from "mongoose";

const connectToDB = async() =>{
  mongoose.connect(process.env.MONGO_URL_ATLAS, {
    dbName: 'BlogiaNextJsWebsite' 
  }).then(() => {
    console.log('Database connected successfully');
    console.log('Active Database:', mongoose.connection.db.databaseName);
  
  }).catch((error) => {
    console.error('Error connecting to database:', error);
  });
}

export default connectToDB