var express = require('express');
var app = express();
var useragent = require('useragent');

//i need to get ip, language and os of browser
//main function
app.get('/', function(req, res){
    //do stuff
    var ip = req.ip;
    var header = JSON.stringify(req.headers);
    var language = req.acceptsLanguages();
    var agent = useragent.parse(req.headers['user-agent']);
    //console.log(req.headers['host']);
    //console.log(req.headers["user-agent"]);
    //console.log(req.acceptsLanguages());
   // console.log(req.acceptsEncodings);

    var output = {
        'ip address': req.headers['host'],
        'language': language[0],
        'operating system': agent.os.toString()
        
    };

    res.send(output);
    


});

//sets the server to listen
var port = process.env.PORT || '3000';
app.set('port', port);
app.listen(port, function(){
    console.log('listening at port:' + port);
});