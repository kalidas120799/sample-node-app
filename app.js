require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();

console.log(process.env.ENVIRONMENT)

// body parser
app.use(express.json({ limit: "50mb" })); // parse json bodies
app.use(express.urlencoded({ extended: true, limit: "50mb" })) // parse URL encoded

// Template Engines
// app.set('view engine', 'ejs'); //  Set EJS as the template engine
app.set('view engine', 'pug'); //  Set pug as the template engine

// Static File Serving
app.use(express.static(path.join(__dirname, "public"))); // http://localhost:8765/data.json
// app.use("/public",express.static(path.join(__dirname, "public"))); // http://localhost:8765/public/data.json

// middleware's
const { httpRequestLogger } = require("./middleware");

// REST API's
const rootRouter = require("./routers");

app.use(httpRequestLogger)


// Routing
app.get("/", (req, res) => res.send("okay"));
app.get("/welcome", (req, res) => {

    const data = {
        user: "sam", date: new Date().toString(),
        role: "admin",
        data: [{ id: 1, name: "a" }, { id: 2, name: "b" }, { id: 3, name: "c" }]
    }
    return res.render(path.join(__dirname, 'templates', 'welcome.ejs'), { data })
});
app.get("/welcome1", (req, res) => {

    const data = {
        user: "sam", date: new Date().toString(),
        role: "admin",
        data: [{ id: 1, name: "a" }, { id: 2, name: "b" }, { id: 3, name: "c" }]
    }
    return res.render(path.join(__dirname, 'templates', 'welcome.pug'), { data })
});
app.use(rootRouter);

module.exports = app;