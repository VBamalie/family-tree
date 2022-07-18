const { Schema, model } = require('mongoose');

const relationsSchema = new Schema({
    Id:{
        type: String,
        required: true
    },
    marriage:{
        date:{
            type: String
        }
    },
    husband:{type: String},
    wife:{type: String},
    children:[{type: String}],
});

const MicRelations = model("MicRelations", relationsSchema)

module.exports = MicRelations