const formController = require('./controllers/formController');

module.exports = function(app){
  app.get('/', function(req, res){
    res.send({message:'standard test response'});
  });
  
  app.post('/form/create', formController.create);
  app.get('/form/:id', formController.getById);
}  