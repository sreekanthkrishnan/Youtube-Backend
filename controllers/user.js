import { createError } from "../error.js";
import User from "../models/User.js";

export const update = async (req, res, next) => {
    if (req.params.id === req.user.id) {
        try {
            const updateUser = await User.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                { new: true }
            );
            res.status(200).json({
                user: {
                    id: updateUser._id,
                    name: updateUser.name,
                    email: updateUser.email,
                    subscribers: updateUser.subscribers,
                    subscribedUsers: updateUser.subscribedUsers,
                },
            });
        } catch (err) {
            next(err);
        }
    } else {
        return next(createError(403, "Invaild access token"));
    }
};
export const deleteUser = (req, res, next) => {
    return res.json(req.body);
};
export const getUser = (req, res, next) => {
    return res.json();
};
export const subscribe = (req, res, next) => {
    return res.json();
};
export const unSubscribe = (req, res, next) => {
    return res.json();
};
export const like = (req, res, next) => {
    return res.json();
};
export const unLike = (req, res, next) => {
    return res.json();
};
