const mongoose = require('mongoose')


const url = "mongodb+srv://pinkbutterfly:plantinum24@logihub.hrsanld.mongodb.net/?retryWrites=true&w=majority&appName=logihub"

exports.dbconnect = async () => await mongoose.connect(url)