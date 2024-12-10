import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const register = async (req, res) => {
    const selectedUser = await User.findOne({ email: req.body.email });
    if (selectedUser) return res.status(400).send("E-mail already exists.");

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: await bcrypt.hashSync(req.body.password),
    });

    try {
        const userSaved = await user.save();
        res.send(userSaved);
    } catch (error) {
        res.status(400).send(error);
    }
};

const login = async (req, res) => {
    const selectedUser = await User.findOne({ email: req.body.email });
    if (!selectedUser)
        return res.status(400).send("E-mail or Password incorrect.");

    const passwordAndUserMatch = bcrypt.compareSync(
        req.body.password,
        selectedUser.password,
    );

    if (!passwordAndUserMatch)
        return res.status(400).send("E-mail or Password incorrect.");

    const token = await jwt.sign(
        { _id: selectedUser.id, admin: selectedUser.admin },
        process.env.TOKEN_SECRET,
    );

    res.header("auth-token", token);
    res.send("User logged");
};

export { register, login };
