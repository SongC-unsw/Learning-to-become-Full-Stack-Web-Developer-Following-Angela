import express from "express";
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("<h1>Hello Your World</h1>"); // send text back

});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact info: 12345</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1>")
})

app.listen(port, () => {
  console.log(`Server running on port ${port}.`); // callback func

});


