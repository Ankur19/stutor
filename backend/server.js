const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

app.use(cors());
app.use(express.json());

mongoose.connect(uri, {useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology:true});
const connection  = mongoose.connection;

connection.once('open', ()=>{
    console.log("mongoDb connection open success");
});

app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`);
});