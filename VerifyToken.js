import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const VerifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) return next(createError(401, "Access token is required "));
    jwt.verify(token, process.env.JWT, (err, user) => {
        if (err) return next(createError(403, "Invaild access token"));
        req.user = user;
        next();
    });
};
