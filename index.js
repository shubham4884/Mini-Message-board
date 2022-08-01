const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const messageDetails = []

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })

);

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.get("/get-messages", (req, res)=>{
res.json(messageDetails)
})

app.post("/post-data", (req, res) => {
  messageDetails.push({
     NAME : req.body.NAME,
     Message : req.body.Message,
     Date : new Date()
  });

  res.redirect("index.html");
  console.log(messageDetails);
});

app.listen(4000, () => {
  console.log("Listing on the PORT 4000");
});
