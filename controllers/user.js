import { createError } from "../error.js";
import User from "../models/User.js";

export const update = async (req, res, next) => {
    console.log(req.body);
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
export const deleteUser = (res, req, next) => {
    return res.json("updated");
};
export const getUser = (res, req, next) => {
    return res.json("updated");
};
export const subscribe = (res, req, next) => {
    return res.json("updated");
};
export const unSubscribe = (res, req, next) => {
    return res.json("updated");
};
export const like = (res, req, next) => {
    return res.json("updated");
};
export const unLike = (res, req, next) => {
    return res.json("updated");
};
