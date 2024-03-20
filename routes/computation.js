const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    
    var a = Math.random()*10+1;
    var b = Math.random()*10+1; 
    const absvalue = Math.abs(a - b);
    a = Math.min(Math.max(a, -1), 1);
    const acosresult = Math.acos(a);
 
    const sinresult = Math.sin(a)
    res.send(`Math.abs(a - b) applied to ${a} and ${b} is ${absvalue}<br>
    Math.acos(a) applied to ${a} is ${acosresult} <br>
    Math.sin(a) applied to ${a} is ${sinresult} <br>
    `);
 
});
 
// module.exports = router;
 
router.get('/', function(req, res) {
    res.send('Respond with a resource');
});

module.exports = router;