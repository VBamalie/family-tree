const { Schema, model } = require('mongoose');

const nameSchema = new Schema({
    Id:{},
    Fullname:{
        Value:{type: String},
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
    },
    description:{
        type: String
    },
    photo:{
        type: String
    }
});

const MicNames = model("MicNames", nameSchema)

module.exports = MicNames