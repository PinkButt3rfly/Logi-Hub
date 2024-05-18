// import packages
const express = require('express');
const {dbconnect} = require('./configuration/dbConfig')
const cors = require('cors')
const userRoute = require('./routers/userloginRoute')


// create express object
const app = express();


// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())


// import routers
app.use('/api/users', userRoute);


// create port
const port = 3005;

// listen to server
app.listen(3005, function()  {
    console.log(`Server started on ${port}`);
    
})

// connect to database
dbconnect().then(function () {
    console.log("database connection successful");
  });
  