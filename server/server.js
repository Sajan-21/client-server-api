const http = require('http');
const port = 3000;
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {

    const req_url = req.url;
    console.log(req_url);

    const parsed_url = url.parse(req_url);
    console.log('parsed url : ',parsed_url);

    if(parsed_url.pathname==='/'){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(fs.readFileSync('../client/index.html'));
    }
    else if(parsed_url.pathname==='/style'){
        res.writeHead(200, {'Content-Type' : 'text/css'});
        res.end(fs.readFileSync('../client/style.css'));
    }
    else if(parsed_url.pathname==='/script'){
        res.writeHead(200, {'Content-Type' : 'text/javascript'});
        res.end(fs.readFileSync('../client/script.js'));
    }
    else if(parsed_url.pathname==='/datas'){
        res.writeHead(200, {'Content-Type' : 'text/json'});
        res.end(fs.readFileSync('../db/datas.json'));
    }


});

server.listen(port,() => {
    console.log(`server running at http://localhost:${port}`);
});