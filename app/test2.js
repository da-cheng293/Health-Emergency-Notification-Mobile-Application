var http = require('http');
var querystring = require('querystring');
var url = require('url');

http.createServer(function (req, res) {
    //grab the callback from the query string   
    var pquery = querystring.parse(url.parse(req.url).query);   
    var callback = (pquery.callback ? pquery.callback : '');

    //we probably want to send an object back in response to the request
    var returnObject = {message: "Hello World!"};
    var returnObjectString = JSON.stringify(returnObject);

    //push back the response including the callback shenanigans
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(callback + '(\'' + returnObjectString + '\')');
}).listen(8124);
