const { Schema, model } = require('mongoose');

const nameSchema = new Schema({
    Id:{type: String},
    Fullname:{
        Value:{type: String},
        Givenname:{type: String},
        Surname:{type: String}
    },
    sex:{type: String},
    Birth:{
        birthdate:{type: String, default: ""},
        birthplace:{type: String, default: ""}
    },
    death:{
        date:{type: String,   default: ""}
    },
    burial:{
        burial:{type: String, default: ""}
    },
    description:{
        type: String,
        default: ""
    },
    photo:{
        type: String,
        default: ""
    }
});

const MicNames = model("MicNames", nameSchema)

module.exports = MicNames