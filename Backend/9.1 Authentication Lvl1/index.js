import express from "express";
import bodyParser from "body-parser";
import pg from "pg"

const app = express();
const port = 3000;

const db = new pg.Client({
  user : "postgres",
  host : "localhost",
  database : "secrets",
  password : "Furi786",
  port : 5432
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const checkResult = await db.query("SELECT * FROM user WHERE email = $1", [
      email,
    ])
    
    if (checkResult.row.length > 0 ) { // that mean no rows found in query
      res.send("Email already exits. Try logging in.")
    } else {
      const result  = await db.query(
        "INSERT INTO users (email,password) VALUES ($1, $2) ",
        [email,password]
      );
      console.log(result);
      res.render("secrets.ejs")
    } 
  } catch (err) {
    console.log(err)
  }
});

app.post("/login", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;
  console.log(username,userpass)
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
