const Rider = require('../models/rider.models.js');

exports.getRider= function(){
    riders = Rider.find({available:true})
    nos = riders.length
    select = Math.floor(Math.random() * nos + 1)
    if(nos){
        return riders[select]
    }else{
        return null;
    }
};
