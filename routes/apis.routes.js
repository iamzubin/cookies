module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');

    app.post('/', notes.create);

    app.get('/order', notes.findAll);

    app.get('/check/:orderId', notes.findOne);


}