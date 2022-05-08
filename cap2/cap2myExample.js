console.log("Creating a Web Server with Node Core - three")

const url = require('url')
const http = require('http')
const PORT = process.env.PORT || 3000
const { STATUS_CODES } = http

const myExample = `<html> 
<head> 
    <style> 
        body { background: #FFF; margin: 1.25rem } h1 { color: #000; font-family: sans-serif } 
    </style> 
</head> 

<body> 
    <h1>My example</h1> 
</body> 

</html>`

const urlBasic = `<html> 
<head> 
    <style> 
        body { background: #FFF; margin: 1.25rem } h1 { color: #000; font-family: sans-serif } 
    </style> 
</head> 

<body> 
    <h1>Url basic</h1> 
</body> 

</html>`

const hello = `<html> 
<head> 
    <style> 
        body { background: #FFF; margin: 1.25rem } h1 { color: #000; font-family: sans-serif } 
    </style> 
</head> 

<body> 
    <h1>Hello</h1> 
</body> 

</html>`

/*createServer method*/
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')

    const { pathname } = url.parse(req.url)

    if (pathname === '/my-example') {
        res.end(myExample)
        return
    }

    if (pathname === '/hello') {
        res.end(hello)
        return
    }  

    if (pathname === '/') {
        res.end(urlBasic)
        return
    } 

    res.statusCode = 404
    res.end(STATUS_CODES[res.statusCode])
    
})
console.log("Start server - port", PORT)
server.listen(PORT)

/*if I pass http://localhost:3000/hello?foo=1 match hello body */