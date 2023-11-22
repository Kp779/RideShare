const mongoose = require('mongoose');
const uri = "mongodb+srv://admin:admin1234@cluster0.cd5oxal.mongodb.net/?retryWrites=true&w=majority";
const connectDB = async () => {
    try {
        await mongoose.connect(uri , 
        {useNewUrlParser: true, 
        useUnifiedTopology: true
    });
    console.log("MongoDB Connected")
    }
    catch (error) {
        console.error(error.message);
        process.exit(1);
    } 
}

export default connectDB;