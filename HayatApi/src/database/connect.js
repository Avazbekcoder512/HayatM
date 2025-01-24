const mongoose = require('mongoose')
require('dotenv').config()

exports.connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_TOKEN)
    .then(console.log('Mongodb connect!'))
    .catch(error => console.log(error))
}