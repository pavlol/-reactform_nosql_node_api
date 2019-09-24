const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//model
const formSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    employed: {type: Boolean, default: false},
    employer: String,
    employerAddress: String,
    createdOn: {type: Date, default: new Date()}
});

//create class
const FormClass = mongoose.model('form', formSchema);

// export
module.exports = FormClass;
