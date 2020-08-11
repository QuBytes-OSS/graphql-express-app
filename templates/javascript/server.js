const mongoose = require('mongoose')
const GraphQLHTTP = require('express-graphql').graphqlHTTP
const express = require('express')
const PORT = 5000 || process.env.PORT
const app = express()
const schema = require('./schema/schema')

//dotenv config
require('dotenv').config()

//mongo connection
mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err))

app.use('/', GraphQLHTTP({
    schema: schema,
    graphiql: true
}))



app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`))