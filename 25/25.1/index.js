import express from "express";
import ejs from  "ejs";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var message = "";


function generateMessage(req, res, next) {
    var day = new Date();
    var today = day.getDate();
    if (today === 0 || today === 6 ) {
        message = "Hey! It's a weekend, it's time to have fun!";
    } else {
        message = "Hey! It's a weekday, it's tme to work hard!";
    }
    next();
} 

app.use(generateMessage);

app.get("/", (req, res) => {
    res.render(__dirname + "/views/index.ejs", {message: message});
});

app.listen(3000,  () => {
    console.log(`Listening on port ${port}`);
});