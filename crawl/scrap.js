var Crawler = require("crawler").Crawler;

var c = new Crawler({
"maxConnections":10,

// This will be called for each crawled page
"callback":function(error,result,$) {


	if(result){
		var page=result.body;
		var res = page.match(/com/i);
		if(res && res.length > 0){
			console.log(result.body);
		}
	}
    // $ is a jQuery instance scoped to the server-side DOM of the page
    $("#content a").each(function(index,a) {
        c.queue(a.href);
    });
}
});

// Queue just one URL, with default callback
c.queue("http://ticketmaster.com");

// Queue a list of URLs
//c.queue(["http://jamendo.com/","http://tedxparis.com"]);

// Queue URLs with custom callbacks & parameters
c.queue([{
"uri":"http://www.ticketmaster.com/",
"jQuery":false,

// The global callback won't be called
"callback":function(error,result) {
    console.log("Total Bytes",result.body.length,"bytes");
}
}]);

// Queue some HTML code directly without grabbing (mostly for tests)
//c.queue([{
//"html":"<p>This is a <strong>test</strong></p>"
//}]);