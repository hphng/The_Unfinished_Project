const mongoose = require('mongoose');

const letterSchema = new mongoose.Schema({
    name:
    {
        type: String,
        default: "new document",
        required: true,
        trim: true,
    },
    content:
    {
        type: String,
        required: false,
        trim: false,
        created_at: Date,
        updated_at: Date,
    },
})

letterSchema.pre('save', async function(next){
    var currentDate = new Date();
    //change the updated field to current date
    letterSchema.updated_at = currentDate;

    //if created_at does not exist, add to that field
    if(!letterSchema.created_at){
        letterSchema.created_at = currentDate;
    }

    next();
})

const letter = mongoose.models.letterSchema || mongoose.model('Letter', letterSchema);

module.exports = letter; //commonJS ghe