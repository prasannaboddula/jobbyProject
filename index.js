const express = require("express");
const jobs = require("./jobsData.js");

const app = express();
const port = 9000;

app.get("/jobs", (req,res) => {
    res.send(jobs);
});

app.listen(9000, () => {
    console.log(`Server Started on ${port}`);
});