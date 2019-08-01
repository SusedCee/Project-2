const mongoose = require('mongoose')
const connectionString= process.env.MONGOD_URI
// const connectionString = 'mongodb://localhost/loveitorloseit'

mongoose.connect(connectionString,
    {useNewUrlParser: true,
    useCreateIndex: true
})

mongoose.connection.on('connected', () => {
    console.log(`mongoose connected to  ${connectionString}`)
})
mongoose.connection.on('disconnected', () => {
    console.log(`mongoose disconnected to  ${connectionString}`)
})
mongoose.connection.on('error', (err) => {
    console.log(`mongoose error ${err}`)
})
