const mongoose = require('mongoose')


// const url = "mongodb+srv://pinkbutterfly:plantinum24@logihub.hrsanld.mongodb.net/?retryWrites=true&w=majority&appName=logihub"
const url = "mongodb+srv://admin:admin123@reactdb.lzojdo6.mongodb.net/Node-API?retryWrites=true&w=majority&appName=reactdb"
exports.dbconnect = async () => await mongoose.connect(url)