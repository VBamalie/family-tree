const { Schema, model } = require('mongoose');

const nameSchema = new Schema({
    Id:{},
    Fullname:{
        Givenname:{type: String},
        Surname:{type: String}
    },
    sex:{type: String},
    Birth:{
        birthdate:{type: String},
        birthplace:{type: String}
    },
    death:{
        date:{type: String}
    },
    burial:{
        burial:{type: String}
    }
});

const VbNames = model("VbNames", nameSchema)

module.exports = VbNames