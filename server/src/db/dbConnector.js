const mongoose = require('mongoose');
const { environment } = require('../config/config');
const { contactSchema } = require('./schema/contactSchema.js');
const env = process.env.NODE_ENV || "development";

/**
 * Mongoose Connection
**/

mongoose.connect(environment[env].dbString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = mongoose.connection;
db.on('error', () => {
    console.error("Error while connecting to DB");
});

const Contacts = mongoose.model('Contacts', contactSchema);

export { Contacts };