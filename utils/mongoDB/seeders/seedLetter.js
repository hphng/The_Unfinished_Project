require('dotenv').config();
const Letter = require('../models/Letter.model');
const { dbConnect } = require('../dbConnect');

const seedLetterData =
    {
        name: "second letter",
        content: "b"
    }

async function seedLetter() {
    try {
        await dbConnect(); 

        //check if table is already existed and drop if existed
        const existedLetter = await Letter.find({});
        if(existedLetter.length !== 0) {
            await Letter.collection.drop();
            console.log("Existing Letter table dropped");
        }
        //initial and save letter into database
        var savedLetter = new Letter(seedLetterData);
        savedLetter.save();
        console.log('Letter data seeded success');
    } catch (error) {
        console.log("Error while seeding data", error);
    }
}

seedLetter();