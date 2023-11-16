var cors = require('cors');

const express = require('express');
const bodyParser = require('body-parser');

// CREATE EXPRESS APP
const app = express();
app.use(cors());
// Setup server port
const port = process.env.PORT || 3000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))
// parse requests of content-type - application/json
app.use(bodyParser.json())
const greeting = "Hello";
const space = " ";
const lastname = "Cabogoy";
const comma = ",";
const firstname = "Zyguel Philip";
//define a root route
app.get('/', (req, res) =>{
    res.send(greeting + space + lastname + comma + space + firstname);
});
// listen for requests
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});