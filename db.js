const mongoose=require("mongoose");
require("dotenv").config();
const connection=mongoose.connect("mongodb+srv://rajshreejaiswal0907:Jaiswal123@cluster0.rvrr6lm.mongodb.net/dbHandCares?retryWrites=true&w=majority")

module.exports={
    connection
}