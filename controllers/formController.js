const Form  = require('../models/form');

exports.create = function(req, res, next){
    const {firstName, lastName, email, employed, employer, employerAddress} = req.body;
    console.log("1");

    if(!firstName || !lastName){
      return res.status(422).send({error : 'First name and last name must be provided'});
    }
    console.log("2");

    Form.findOne({ firstName : firstName, lastName : lastName  }, function(err, existing){
      if(err){
    console.log("3");

        return next(err);
      }
      if(existing){
    console.log("4");

        return res.status(422).send({error: 'The record already exist for this person'});
      }
    console.log("5");

      const form = new Form({firstName, lastName, email, employed, employer, employerAddress });
      form.save(function(err){
        if(err) {
    console.log("6");

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
