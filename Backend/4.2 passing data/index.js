import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// if i do not used then req.body not work so for req from client we have to used bodyparser
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs")
});

app.post("/submit", (req, res) => {
  const CountletterInName = req.body["fName"].length + req.body["lName"].length;
  res.render("index.ejs",{WordInLetter:CountletterInName})
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
