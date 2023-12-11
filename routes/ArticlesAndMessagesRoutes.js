import express from "express";
import { getArticlessController, getSingleArticleController } from "../controllers/ArticlesController.js";
import { createMessagesController, getMessagesController } from "../controllers/MessagesController.js";


const router = express.Router();

// routes
router.get("/get-articles", getArticlessController);

// single article
router.get("/get-articles/:aid", getSingleArticleController);

// get messages
router.get("/get-messages", getMessagesController);

// create messages
router.delete("/create-messages", createMessagesController);

export default router;
