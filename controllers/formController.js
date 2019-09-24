const Form  = require('../models/form');

exports.create = function(req, res, next){
    const {firstName, lastName, email, employed, employer, employerAddress} = req.body;

    if(!firstName || !lastName){
      return res.status(422).send({error : 'First name and last name must be provided'});
    }
    Form.findOne({ firstName : firstName, lastName : lastName  }, function(err, existing){
      if(err){
        return next(err);
      }
      if(existing){
        return res.status(422).send({error: 'The record already exist for this person'});
      }
      const form = new Form({firstName, lastName, email, emaployed, employer, employerAddress });
      form.save(function(err){
        if(err) {
          return next(err);
        }
        res.json(form);
    // res.status(200).send("OK");
      });
    });
}


exports.getById = function(req, res, next){
    const id = req.params;

    if(!id){
      return res.status(422).send({error : 'Id is required'});
    }
    Form.findOne({ _id : id  }, function(err, existing){
        if(err){
            return next(err);
        }
        if(!existing){
            return res.status(401).send({error: 'The form not found'});
        }
        res.json(existing);
    });
}
