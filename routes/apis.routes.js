module.exports = (app) => {
    const cookies = require('../controller/controller.js');

    app.get('/', cookies.list);

    app.post('/add-cookies', cookies.listAdd);

    app.post('/add-rider', cookies.riderAdd);

    app.get('/list-rider', cookies.riderList);

    app.post('/order', cookies.newOrder);

    // app.get('/check/:orderId', cookies.findOne);
    
    // app.get('/deliver/:orderId', cookies.findOne);


}