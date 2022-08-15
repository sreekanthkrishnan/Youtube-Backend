import { createError } from "../error.js";

export const update = (req, res, next) => {
    console.log(req.params, req.user);
    if (req.params.id === req.user.id) {
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
