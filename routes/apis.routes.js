module.exports = (app) => {
    const cookies = require('../controller/controller.js');

    app.get('/', cookies.list);
    
    app.post('/add-cookies', cookies.listAdd);

    // app.get('/order', cookies.findAll);

    // app.get('/check/:orderId', cookies.findOne);


}