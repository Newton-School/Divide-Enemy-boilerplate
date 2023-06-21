const fs = require("fs");
const User = require('./models/user.js');

async function seedWithDummyData() {
    try {
        // CLEAR Dawait Subject.deleteMany({});
        await User.deleteMany({});
    } catch (error) {
        console.error(`Error seeding data: ${error}`);
        process.exit(1);
    }
}

module.exports = seedWithDummyData