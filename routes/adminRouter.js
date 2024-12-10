import express from "express";
const router = express.Router();
import auth from "../controllers/authController.js";

router.get("/", auth, (req, res) => {
    if (req.user.admin === true) {
        res.send("Esse dado só pode ser visto pelo admin");
    } else {
        res.status(401).send("Not Admin: Access Denied.");
    }
});

export default router;
