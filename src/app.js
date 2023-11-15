const expr = require('express');
const app = expr();
app.use(expr.json());

app.get("/info", (req, resp) => {

});


app.listen(PORT, () => {
    console.log(`Listened on port ${PORT}`);
});