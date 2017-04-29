var express = require('express');
var app = express();
var useragent = require('useragent');


app.get('/', function(req, res){
    //do stuff
    var ip = req.ip;
    var language = req.acceptsLanguages();
    var agent = useragent.parse(req.headers['user-agent']);

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