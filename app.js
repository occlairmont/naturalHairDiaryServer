require("dotenv").config();
let express = require("express");
let app = express();
let db = require("./db");
let user = require("./controllers/usercontroller");
// let entry = require("./controllers/entrycontroller");
app.use(require("./middleware/headers"));

db.sync();
app.use(express.json());
app.use("/user", user);
// app.use("/entry", entry);

app.listen(3001, function(){
    console.log('App is listening on port 3001')
});