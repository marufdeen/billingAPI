import  mongoose from 'mongoose';
import env from 'dotenv';
env.config(); 
mongoose.connect( 'mongodb://localhost/billingAPI' , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to Database"));

export default mongoose;