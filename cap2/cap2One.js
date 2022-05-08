console.log("Creating a Web Server with Node Core - 1")

const http = require('http')
const PORT = process.env.PORT || 3000
const hello = `<html> 
<head> 
    <style> 
        body { background: #FFF; margin: 1.25rem } h1 { color: #000; font-family: sans-serif } 
    </style> 
</head> 

<body> 
    <h1>Hello World</h1> 
</body> 

</html>`

/*createServer method*/
const server = http.createServer((req, res) => {
        res.setHeader('Content-Type', 'text/html')
        res.end(hello)
    }
)
console.log("Start server - port", PORT)
server.listen(PORT)

/* we've used the Node core http module to create a server with the createServer method.
We've also observed that a function is passed to createServer. 
This function is called every time the HTTP server receives a request. 
The function passed to createServer is passed two objects: the request object and the response object. 
These objects are created for every request and then passed to the function we supply to createServer. 

In the function we passed to createServer we use the setHeader and 
the end methods of the response object (res) to set the Content-Type header to text/html, 
and to send the string of HTML (assigned to the hello constant) while also closing the connection. 
The res object inherits from http.ServerResponse which in turn inherits from http.OutgoingMessage (a Node core internal constructor) 
which then inherits from stream.Stream. 
For all practical purposes the res object is a writable stream, 
which is why calling end writes our content and also closes the connection.

*/