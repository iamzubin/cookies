const Rider = require('../models/rider.models.js');
const Cookies = require('../models/cookies.models.js');


exports.getRider = function () {
    Rider.find({
            available: true
        })
        .then(Rider => {
            response = []
            Rider.forEach(element => {
                append = {
                    name: element.name,
                    available: element.available
                }
                response.push(append)
            })
           return(response)
        });
};


exports.selectRider = function (rider, rider_nos){
    console.log(rider, rider_nos)
    select = Math.floor(Math.random() * rider_nos + 1)
    if (rider_nos) {
        return (rider[select])
    } else {
        return null;
    }
}

exports.riderBusy = function (rider) {
    Rider.findOneAndUpdate({
        name: rider
    }, {
        name: rider,
        available: false
    })
};


exports.checkCookies = function (cookies, nos) {
    cookies_return = Cookies.findOne({
        name: cookies
    })

    if (nos >= cookies_return.stock) {
        return (false)
    } else {
        Cookies.findOneAndUpdate({
            name: cookies
        }, {
            name: cookies,
            stock: cookies_return.stock - nos
        })
    }


};