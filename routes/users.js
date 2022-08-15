import express from "express";
import {
    deleteUser,
    getUser,
    like,
    subscribe,
    unLike,
    unSubscribe,
    update,
} from "../controllers/user.js";
import { VerifyToken } from "../VerifyToken.js";

const router = express.Router();

//UPDATE USER
router.put("/:id", VerifyToken, update);

//DELETE A USER
router.delete("/:id", deleteUser);

//GET A USER
router.get("/find/:id", getUser);

//SUBSCRIBE A USER
router.put("/subscribe/:id", subscribe);

//UNSUBSCRIBE A USER
router.put("/unsubscribe/:id", unSubscribe);

//LIKE A VIDEO
router.put("/like/:video_id", like);

//DISLIKE A VIDEO
router.put("/unlike/:video_id", unLike);

export default router;
