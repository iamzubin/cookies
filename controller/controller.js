const Orders = require('../models/orders.models.js');
const Cookies = require('../models/cookies.models.js');
const Rider = require('../models/rider.models.js');





// Cookies stock

exports.list = (req, res) => {
    Cookies.find()
        .then(Cookies=>{
            response = []
            Cookies.forEach(element => {
                append = {
                    name: element.name,
                    price: element.price,
                    stock: element.stock,

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


// Rider CRUD ==================

exports.riderAdd = (req, res) => {
    if(!req.body.name){
        return res.status(400).send({
            message : "'name' :  can not be empty"
        })
    }
    
    const rider = new Rider({
        name: req.body.name,
        available: true
    })

    rider.save()
        .then(data=>{
            res.send(data)
        }).catch(err =>{
            res.status(500).send({
                message : err.message || "some Error occured"
            })
        })
};



exports.riderList = (req, res) => {
    
    Rider.find()
        .then(Rider=>{
            response = []
            Rider.forEach(element => {
                append = {
                    name: element.name,
                    available: element.available
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


// Ordering ==================

exports.newOrder = (req, res) => {
    
};