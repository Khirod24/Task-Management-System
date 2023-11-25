const mongoose=require("mongoose");

require("dotenv").config();

const databaseConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>console.log("Database connection successfull!!"))
    .catch((error)=>{
        console.log("Issue in database connection");
        console.error(error.message);
        //end the process with some failure
        process.exit(1);
    });
}

//exporting databaseConnect function
module.exports = databaseConnect;
