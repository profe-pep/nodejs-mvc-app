'use strict'

require('dotenv').config()

module.exports = {
    'host': process.env.HOST || 'localhost',
    'port': process.env.PORT || 8080,
}