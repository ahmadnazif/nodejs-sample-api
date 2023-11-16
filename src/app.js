const express = require('express');
//const bodyParser = require('body-parser');
const response = require('./models/response');
const db = require('./services/db');
const smsbase = require('./models/smsbase');
const port = 5678;

const app = express();
app.use(express.json());
//app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Listened on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("Welcome. Please call /sms endpoints");
});

app.get("/sms/get", async (req, res) => {

    let id = req.query.id;
    let sms = await db.get(id);
    res.send(sms);
});

app.get("/sms/list-all", async (req, res) => {

    let smses = await db.listAll();
    res.send(smses);
});

app.post("/sms/add", async (req, res) => {

    //let id = req.body.id;
    let from = req.body.from;
    let to = req.body.to;
    let text = req.body.text;
    let resp = await db.add(from, to, text);
    res.send(resp);
});

app.put("/sms/edit", (req, res) => {
    res.send("edit");
});

app.delete("/sms/delete", (req, res) => {

    let id = req.query.id;
    res.send("delete");
});