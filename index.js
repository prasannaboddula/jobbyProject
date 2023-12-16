const express = require("express");
const jobs_data = require("./jobsData.json");
const cors = require("cors");

const app = express();
const port = 9000;

app.use(cors());
app.get("/jobs", (req,res) => {
    res.send(jobs_data);
});

app.get("/jobs/:id", (req,res) => {
    const { id } = req.params;
    const index = jobs_data.jobs.findIndex(object => {
        return object.id === id;
    })
    res.send(jobs_data.jobs[index]);

});

app.listen(9000, () => {
    console.log(`Server Started on ${port}`);
});