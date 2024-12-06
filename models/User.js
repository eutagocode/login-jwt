import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: { type: String, required: true, minlength: 3 },
    email: { type: String, required: true, minlength: 3 },
    password: { type: String, required: true, minlength: 8 },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("User", userSchema);
