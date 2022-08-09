import bcrypt from "bcryptjs";
import { createError } from "../error.js";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
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
        next(createError(err.status, err.message));
    }
};

export const signin = async (req, res, next) => {
    try {
        const user = await User.findOne({ name: req.body.name });
        if (!user) return next(createError(404, "User not found"));

        const isCorrect = await bcrypt.compare(
            req.body.password,
            user.password
        );

        if (!isCorrect) {
            return next(createError(400, "Password don't match"));
        } else {
            const token = jwt.sign({ id: user._id }, process.env.JWT);
            res.cookie("access_token", token, {
                httpOnly: true,
            }).json({
                StatusCode: 6000,
                status: "success",
                access_token: token,
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    subscribers: user.subscribers,
                    subscribedUsers: user.subscribedUsers,
                },
            });
        }

        await newUser.save();

        res.json({
            StatusCode: 6000,
            status: "success",
        });
    } catch (err) {
        next(createError(err.status, err.message));
    }
};

export const googleSignin = () => {
    console.log("googleSignin");
};
