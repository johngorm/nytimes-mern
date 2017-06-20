const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(logger('dev'));
app.use(bodyParser.json());



mongoose.connect('localhost:/nytreact');
const db = mongoose.connection;

db.on('error', function(error){
	console.error('Mongoose error: ' + error);
});

db.on('open', function(){
	console.log('Mongoose connection success');
});


app.listen(PORT, () =>{
	console.log(`App listening on port ${PORT}`);
})



