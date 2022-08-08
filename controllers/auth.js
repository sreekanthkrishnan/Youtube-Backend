import bcrypt from "bcryptjs";
import User from "../models/User.js";

export const signup = async (req, res) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({ ...req.body, password: hash });

        await newUser.save();

        res.json({
            StatusCode: 6000,
            status: "success",
        });
    } catch (err) {
        // CREATE ERR HANDLING FUNCTION
        console.log(err);
    }
};

export const signin = () => {
    console.log("signin");
};

export const googleSignin = () => {
    console.log("googleSignin");
};
