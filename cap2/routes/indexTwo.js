const { Router } = require('express') 
const router = Router() 
const root = `<html> 
<head> 
    <style> 
    body { background: #fff; margin: 1.25rem } a { color: #000; font-size: 2rem; font-family: sans-serif } 
    </style> 
</head> 

<body> 
    <h1>One</h1> 
    <p>This is part ONE</p>
</body> 

</html> ` 

router.get('/', (req, res) => { 
    res.send(root) 
}) 
module.exports = router