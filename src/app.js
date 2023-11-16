const express = require('express');
const response = require('./models/response');
const port = 5678;

const app = express();
app.use(express.json());

app.listen(port, () => {
    console.log(`Listened on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("Hello");
});

app.get("/sms/get", (req, res) => {

    let id = req.query.id;
    res.send("ID: "+id);
});

app.get("/sms/list-all", (req, res) => {
    res.send("list-all");
});

app.post("/sms/add", (req, res) => {
    res.send("add");
});

app.put("/sms/edit", (req, res) => {
    res.send("edit");
});

app.delete("/sms/delete", (req, res) => {

    let id = req.query.id;
    res.send("delete");
});