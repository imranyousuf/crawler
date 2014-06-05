var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();




console.log('Got the return request, parsing now!!');
request('http://www.ticketmaster.com/', function (err,resp,body){
	if(!err && resp.statusCode ==200){
		
		var $ = cheerio.load(body);
		var allResults = [];

		$('a.event','#onSaleList').each(function(){
			//var url = $(this).attr('href')
			//urls.push(url);
			var title = $(this).text();
			var url = $(this).attr('href');

			//var k = $('</a>').next();
			//var loc = 
		$('td.date').each(function(){
			var month = $('div.month').text();
			var day   = $('div.day').text();
			var date  = $('div.date').text();

/*
		$('.event').each(function(i, element){

			var l = $(this).parent().next();

			var loc = l.text();
		
		/*
			var location = $(this).text();
			locations.push(location);
	

			*/
		
});

		var metadata = {
			//event_title: title,
			//url: url
			//location: loc
			day: day


		};

		allResults.push(metadata);

	//});
		});

		//console.log(urls);
		console.log(allResults);
	}
});