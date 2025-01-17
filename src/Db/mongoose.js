const mongoose = require("mongoose");

mongoose
    .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
    })
    .catch(e => {
        console.error('Connection error', e.message)
    });

const db = mongoose.connection

module.exports = db