var cakeController = require('../controllers/cakeController.js')
console.log('SERVER > CONFIG > routes.js');


module.exports = function(app){
    //Root retrieve all
    app.get('/cakes', cakeController.retrieveAll);
    //Retrieve 1
    app.get('/cake/:id', cakeController.retrieveOne);
    //Create
    app.post('/create', cakeController.create);

    app.post('/comment', cakeController.comment);
    //Update
    // app.put('/update/:id', cakeController.update_task)
    //Delete
    // app.delete('/delete/:id', cakeController.destroy_task)
}