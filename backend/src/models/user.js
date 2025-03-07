const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
    // Fname: { type: String, required: true},
    // Lname: { type: String, required: true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // profilePicture: { type: String },
    // phone: { type: String, required: true},
    // address: { type: String, required: true},
    createdAt: { type: Date, default: Date.now },
});

UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

module.exports = mongoose.model("User", UserSchema);