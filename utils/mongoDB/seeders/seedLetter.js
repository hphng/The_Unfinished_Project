require('dotenv').config();
const Letter = require('../models/letter');
const { dbConnect } = require('../MongoConnect');

const seedLetterData =
    {
        name: "second letter",
        content: "b"
    }

async function seedLetter() {
    try {
        //database connection
        await dbConnect(); 

        //Validation
        const existedLetter = await Letter.find({});
        if(existedLetter.length !== 0) {
            await Letter.collection.drop();
            console.log("Existing Letter table dropped");
        }
        //database logic
        
        var savedLetter = new Letter(seedLetterData);
        savedLetter.save();
        console.log('Letter data seeded success');

    } catch (error) {
        console.log("Error while seeding data", error);
    }
}

seedLetter();