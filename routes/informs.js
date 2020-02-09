let express = require('express');
let router = express.Router();
let inform = require('../connection')

router.get('/', function(req,res,next){
    inform.findAll().then(function(data){
        res.json(data);
    })
});
router.get('/:place/:checkin/:checkout',function(req,res){
    inform.findAll({
        where:{
            place:req.params.place,
            checkIn:req.params.checkin,
            checkOut:req.params.checkout
        }
    }).then(function(data){
        res.json(data);
    })
});

module.exports = router;