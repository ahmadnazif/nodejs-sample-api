const expr = require('express');
const response = require('./models/response');

const app = expr();
app.use(expr.json());

app.listen(5678, () => {
    console.log(`Listened on port 5678`);
});

app.get("/", (req, res) => {
    res.send("Hello");
});

app.get("/sms/get", (req, res) => {
    res.send("get");
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
    res.send("delete");
});