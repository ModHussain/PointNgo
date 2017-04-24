var express = require('express');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
 
var app = express();
 
// all environments

app.set('port', process.env.PORT || 2000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
 
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
 
mongoose.connect('mongodb://localhost/PointNgo');
 
var Schema = new mongoose.Schema({
	bname   : String,
	sname: String,
	addr  : String,
	city:String,
	state:String,
	pcode:Number,
	lotd:String,
	latd:String,
	tag:String,
	mondayoh:String,
	frotime:Number,
	totimme:Number,
	tuesdayoh:String,
	frotime:Number,
	totimme:Number,
	wedneoh:String,
	frotime:Number,
	totimme:Number,
	thuroh:String,
	frotime:Number,
	totimme:Number,
	frioh:String,
	frotime:Number,
	totimme:Number,
	saturoh:String,
	frotime:Number,
	totimme:Number
	
});
 
var user = mongoose.model('data', Schema);

app.param('id', function(req, res, next, id){
	user.findById(id, function(err, docs){
			if(err) res.json(err);
			else
			{
				req.userId = docs;
				next();
			}
		});	
});
 
app.get('/user/:id', function(req, res){
	res.render('show', {user: req.userId});
});
 
 app.get('/user/:id', function(req, res){
	user.find({_id: req.params.id}, function(err, docs){
			if(err) res.json(err);
			else    res.render('show', {user: docs[0]});
		});	
});

app.get('/view', function(req, res){
	user.find({}, function(err, docs){
		if(err) res.json(err);
		else    res.render('index', {users: docs});
	});
});


app.post('/new', function(req, res){
	new user({
		bname   : req.body.bname,
		sname: req.body.sname,
		addr  : req.body.addr,
		city: req.body.city,
		state  : req.body.state,
		pcode: req.body.pcode,
		lotd   : req.body.lotd,
		latd   : req.body.latd,
		tag: req.body.tag,
		mondayoh   : req.body.mo,
		frotime: req.body.mf,
		totimme : req.body.mt,
		tuesdayoh: req.body.to,
		frotime: req.body.tf,
		totimme : req.body.tt,
		wedneoh  : req.body.wo,
		frotime: req.body.wf,
		totimme : req.body.wt,
		thuroh: req.body.too,
		frotime: req.body.tof,
		totimme : req.body.tot,
		frioh   : req.body.fo,
		frotime: req.body.ff,
		totimme : req.body.ft,
		saturoh: req.body.so,
		frotime: req.body.sf,
		totimme : req.body.st
		
		
		
	}).save(function(err, doc){
		if(err) res.json(err);
		else    res.redirect('/view');
	});
});
 
 
 
var server = http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});