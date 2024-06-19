const { response } = require("express");
const dbConn = require("../db/dbConfig.js");
const generateUniqueId = require('generate-unique-id');



const postQuestion = async (req, res) => {
  // console.log(req.body);
  if (!req.body.title || !req.body.description) {
    return res.status(400).send("Title and description are required");
  }

const questionid= generateUniqueId()
  let response = null;
  if (req.body.tag) {
    const [question] = await dbConn.query(
      "INSERT INTO questions (title, description, tag, userid,questionid) VALUES (?,?,?,?,?)",
      [req.body.title, req.body.description, req.body.tag, req.user.userid,questionid]
    );
    response = question;
  } else {
    const [question] = await dbConn.query(
      "INSERT INTO questions (title, description, userid,questionid) VALUES (?,?,?,?)",
      [req.body.title, req.body.description, req.user.userid,questionid]
    );
    response = question;
  }

  if (response?.length === 0) {
    return res.status(500).send("Failed to post question");
  }

  res.status(201).send("Question posted");
};



const getAllquestion = async (req, res) => {
  try{
    const [questions] = await dbConn.query("SELECT * FROM questions");
    res.send(questions);
  }catch{
    res.status(500).send("faild to connection")
  }

};



const getsinglequesion = async (req, res) => {
  const [question] = await dbConn.query(
    "SELECT * FROM questions WHERE id = ?",
    [req.params.id]
  );

  if (question.length === 0) {
    return res.status(404).send("Question not found");
  }

  res.status(200).send(question);
};



const searchQuestions = async (req, res) => {
  const [questions] = await dbConn.query(
    "SELECT * FROM questions WHERE title LIKE ?",
    [`%${req.params.searchQuery}%`]
  );
  res.status(200).send(questions);
};

module.exports = {
  postQuestion,
  getAllquestion,
  getsinglequesion,
  searchQuestions,
};