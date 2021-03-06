const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const app = express();
//Define PORT by env for Heroku deployment
const PORT = process.env.PORT || 5000;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

app.use(express.static('./public'));

//Connect to the mongo database with mongoose
mongoose.connect('mongodb://heroku_xwgl6fzs:8b7umu5r3pi6dndom0o1ei751q@ds145312.mlab.com:45312/heroku_xwgl6fzs');
const db = mongoose.connection;

db.on('error', function(error){
	console.error(`Mongoose error: ${error}`);
});

db.on('open', function(){
	console.log('Mongoose connection success');
});

//Require Article schema
const Article = require('./models/Articles.js');

//API routes to access database
//Get the first 5 results in the database in order of most recent
app.get('/api/saved', (req, res) =>{
	Article.find({}).sort([
		['date', 'descending']
	    ]).limit(5).exec(function(error, docs){
		    if(error){
			    console.log(error)
		    }
		    else{
			    res.send(docs);
		    }
	});
});

app.post('/api/saved', (req, res) =>{
	Article.create({
		title : req.body.title,
		date: Date.now(),
		url: req.body.url
	}, (err) =>{
		if (err){
			console.log(err);
		}
		else{
			res.send('Saved Search');
		}
	});

});

app.delete('/api/saved/:id', (req, res) =>{
	Article.remove({
		where:{
			id: req.params.id
		}
	}, (error) =>{
		if(error) {
			console.log(error)
			throw error
		}
		else{
			res.send("Document deleted")
		}
	})
});

app.get('/', (req, res) =>{
	res.sendFile(__dirname + "/public/index.html");
});



app.listen(PORT, () =>{
	console.log(`App listening on port ${PORT}`);
})



