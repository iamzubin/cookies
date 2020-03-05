const Orders = require('../models/orders.models.js');
const Cookies = require('../models/cookies.models.js');
const Rider = require('../models/rider.models.js');

exports.newOrder = (req, res) => {
    
};
exports.list = (req, res) => {
    Cookies.find()
        .then(Cookies=>{
            response = []
            Cookies.forEach(element => {
                append = {
                    name: element.name,
                    stock: element.stock
                }
                response.push(append)
            });
            res.send(response)
        }).catch(err => {
            res.status(500).send({

                message: err.message || "Some Error occured"
            })
            
        })
};



exports.listAdd = (req, res) => {
    if(!req.body.name){
        return res.status(400).send({
            message : "'name' :  can not be empty"
        })
    }
    
    const cookie = new Cookies({
        name: req.body.name,
        stock: req.body.stock || 10 
    })

    cookie.save()
        .then(data=>{
            res.send(data)
        }).catch(err =>{
            res.status(500).send({
                message : err.message || "some Error occured"
            })
        })
};
