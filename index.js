const express = require("express");
// const db = require("./config/dbConnection")
const errorhandler = require("./middleware/errorhandler");

const dotenv = require("dotenv").config();
const app = express();
// db();

app.use(express.json()) //it parse the data 
const port = process.env.PORT || 5000;

app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorhandler);
app.listen(port, () => {
    console.log(`server is running on ${port}`);
})