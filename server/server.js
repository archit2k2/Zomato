const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-Parser");
const { login, get_profile, signup, update_profile, reset, cart, delete_item, empty_cart, get_cart, get_name, get_address, order, get_order } = require("./src/controllers")

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://Zomato:1234@cluster0.gvp8i8b.mongodb.net/?retryWrites=true&w=majority");
mongoose.connection.on("connected",()=>{
    console.log("DB CONNECTED");
})


app.post("/login",login);
app.get("/get-profile",get_profile);
app.get("/get-name",get_name);
app.get("/get-address",get_address);
app.post("/signup",signup);
app.post("/update-profile",update_profile);
app.post("/reset",reset);
app.post("/cart",cart);
app.post("/delete-item",delete_item);
app.post("/empty-cart",empty_cart);
app.get("/get-cart",get_cart);
app.post("/order",order);
app.get("/get-order",get_order);

app.listen(5000,() => {
    console.log("server started at 5000 port");
})