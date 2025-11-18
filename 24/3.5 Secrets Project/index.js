//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser  from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var password = "ILoveProgramming";
var isAllowed = false;

app.use(bodyParser.urlencoded({ extended: true }));

function passwordChecker(enteredPass) {
    if (enteredPass === password) {
        return true;
    } else {
        return false;
    }
};

function passwordCheck(req, res, next) {
    const enteredPass = req.body.password
    if (enteredPass === password) {
        isAllowed =  true;
    } else {
        isAllowed =  false;
    }
    next();
};

app.use(passwordCheck);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    //var enteredPass = req.body.password
    //var isAllowed = passwordChecker(enteredPass)
    if (isAllowed) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.sendFile(__dirname + "/public/index.html");
    }
});

app.listen(3000,  () => {
    console.log(`Listening on port ${port}`);
});


