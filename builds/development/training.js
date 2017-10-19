var app = express()
var datefile = require("./data/data.json");

var content ='';

datafile.courses.foreach(function(path){
	content +='
	<h2>${path.path}</h2>
	';
	path.foreach(function(course)){
		<p>course.name</p>
		<p>course.author</p>
		<p>course.introduction</p>
		<p>course.topic</p>	
	}

}) 
