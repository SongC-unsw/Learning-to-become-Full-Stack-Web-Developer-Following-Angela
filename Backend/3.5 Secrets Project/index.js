//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import express from "express";

const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;
const app = express();
const secret = "ILoveProgramming";
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    const pw = req.body["password"];
    if (pw === secret) {
        res.sendFile(__dirname + "/public/secret.html");

    } else {
        res.sendFile(__dirname + "/public/index.html");
        
    }
    
});


app.listen(port, () => {
    console.log("Server running on port ", port);
});