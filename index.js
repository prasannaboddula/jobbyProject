const express = require("express");
const jobs = require("./jobsData.json");
const cors = require("cors");

const app = express();
const port = 9000;

app.use(cors());
app.get("/jobs", (req,res) => {
    res.send(jobs);
});

app.listen(9000, () => {
    console.log(`Server Started on ${port}`);
});