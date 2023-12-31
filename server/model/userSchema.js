const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },

    verificationToken: String,
})


// we are hashing the password
userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 12);
        this.confirmPassword = await bcrypt.hash(this.confirmPassword, 12)

    }
    next();
})

// we are genrating token
userSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (err) {
        console.log(err)
    }
}

// stored the message
userSchema.methods.addMessage = async function (fullName, email, phone, message) {

    try {
        this.messages = this.messages.concat({ fullName, email, phone, message });
        await this.save();
        return this.messages;
    } catch (error) {
        console.log(error)
    }
}

// collection creation
const User = mongoose.model("users", userSchema);
module.exports = User;