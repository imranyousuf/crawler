var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();
urls =[];
titiles=[];


console.log('Got the return request, parsing now!!');
request('http://www.ticketmaster.com/', function (err,resp,body){
	if(!err && resp.statusCode ==200){
		
		var $ = cheerio.load(body);

		$('a.event','#onSaleList').each(function(){
			//var url = $(this).attr('href')
			//urls.push(url);
			var title = $(this).text();
			titiles.push(title);


		});

		//console.log(urls);
		console.log(titiles);
	}
});