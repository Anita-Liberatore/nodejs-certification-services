var express = require('express');
var router = express.Router();
var model = require('../model');

router.get('/:id', function (req, res, next) {
    model.bicycle.read(
        req.params.id, (err, result) => {
            if (err) {
                if (err.message === 'Not found')
                    next();
                else next(err);
            }
            else { 
                res.send(result); 
            }
        });
});

/* router.get('/:id', function (req, res, next) {
    model.bicycle.read(
        req.params.id, (err, result) => {

            res.send(result);

        });
}); */

module.exports = router;