import dotenv from "dotenv";
import MessagesModel from "../models/MessagesModel.js";

dotenv.config();


// create message controller
export const createMessagesController = async (req, res) => {
  try {
    const { message } = req.body;
    
    const messages = new MessagesModel({ ...req.body});
    await messages.save();
    res.status(201).send({
      success: true,
      message: "Message sent successfully",
      messages,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false, 
      message: "Error in sending message",
      error,
    });
  }
};

// get all contacts controller
export const getMessagesController = async (req, res) => {
  try {
    const messages = await MessagesModel.find({})
      .sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      total: messages.length,
      message: "All messages",
      messages,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while getting all messages",
      error,
    });
  }
};


