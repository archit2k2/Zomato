const mongoose = require("mongoose");
const uuid = require("uuid");
const CryptoJs = require("crypto-js");

const userSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            trim: true,
        },
        last_name: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
        },
        cart: [
            {
                id: String,
                price: Number,
                name: String,
                count: Number,
            }
        ],
        order: [
            {
                items: Array,
                amount: Number
            }
        ],
        mobile: String,
        address: String,
        ency_password: String,
        salt: String,
},
{timestamps:true}
);

userSchema.methods = {
    securePassword : function (plainPassword)
    {
        return CryptoJs.SHA256(plainPassword, this.salt).toString();
    },
    authenticate: function (password) {
        return this.ency_password === this.securePassword(password);
    },

};

userSchema.virtual ("password").set(function (plainPassword){
    this.salt=uuid.v4();
    this.ency_password = this.securePassword(plainPassword);
});

const User = mongoose.model("User",userSchema);
module.exports = { User };