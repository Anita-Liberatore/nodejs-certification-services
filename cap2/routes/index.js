const { Router } = require('express') 
const router = Router() 
const root = `<html> 
<head> 
    <style> 
    body { background: #fff; margin: 1.25rem } a { color: #000; font-size: 2rem; font-family: sans-serif } 
    </style> 
</head> 

<body> 
    <p>Hello</p> 
</body> 

</html> ` 

router.get('/', (req, res) => { 
    res.send(root) 
}) 
module.exports = router