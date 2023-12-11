import dotenv from "dotenv";
import ArticlesModel from "../models/ArticlesModel.js";

dotenv.config();



// get all articles controller
export const getArticlessController = async (req, res) => {
  try {
    const articles = await ArticlesModel.find({})
    res.status(200).send({
      success: true,
      total: articles.length,
      message: "All articles",
      articles,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while getting all articles",
      error,
    });
  }
};

export const getSingleArticleController = async (req, res) => {
  try {
    const article = await ArticlesModel.findOne({ _id: req.params.aid })
    res.status(200).send({
      success: true,
      message: "Single article Fetched",
      article,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while getting single article",
      error,
    });
  }
};
