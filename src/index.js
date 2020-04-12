const express = require("express");
require("./Db/mongoose");
// require('./Controllers/modals/Category')
const expressGraphQL = require('express-graphql');
const bodyParser = require('body-parser');
const schema  = require('./Controllers/schema/schema')
//main dashboard routers

const app = express();
const port = process.env.PORT;
var cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
// const route = require('./Controllers/routers/CategoryRouter');
// app.use(route);

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}));

app.listen(port, () => {
    console.log("Server is up on port " + port);
});
