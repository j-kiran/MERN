const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

//bodyParser middleware
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

//connect to Mongo
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('mongoDB connected'))
    .catch(err => console.log(err));

// use Routes
app.use('/api/items', items);

//Serve static assets if in production
if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));

    app.get('*', (req,res) => {
        res.send(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
    

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

