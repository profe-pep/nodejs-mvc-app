'use strict'

// App config
//require('dotenv').config()
const config = {
    'server': require('./config/server'),
    'database': require('./config/database')
}

// App framework
const express = require('express')
const app = express()

// App logger
const pino = require('pino-http')()
app.use(pino)

// App session
const session = require('express-session')
app.use(
    session({
        // It holds the secret key for session
        secret: 'keyboard_cat',
        // Forces the session to be saved
        // back to the session store
        resave: true,
        // Forces a session that is "uninitialized"
        // to be saved to the store
        saveUninitialized: false,
        // Cookies config
        cookie: { }
    })
)

// App template engine
const nunjucks = require('nunjucks')
nunjucks.configure('views', {
    autoescape: true,
    express: app
})

// App database
const mongoose = require('mongoose');
mongoose.connect(config.database.uri, (err , res) => {
    // if( err) throw err  // lanza una excepción con error
    if (err){
        console.log(`DB connection ERROR: ${err}`);
    } else {
        console.log(`DB connection established`);
    }
})

// App routes
const web = require('./routes/web');
app.use('/', web)

// Deploy app
const HOST = config.server.host
const PORT = config.server.port
app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)

module.exports = app;