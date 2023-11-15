const expr = require('express');
const response = require('./models/response');
//const serverInfo = require('./models/serverinfo');

const app = expr();
app.use(expr.json());

app.listen(5678, () => {
    console.log(`Listened on port 5678`);
});

app.get("/", (req, resp) => {
    resp.send("Hello");
});

app.get("/info", (req, resp) => {

    response.isSuccess = true;
    response.message = "OK";
    
    console.log(response);

    resp.send(response)

});