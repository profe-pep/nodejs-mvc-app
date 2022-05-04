'use strict'

var router = require('~/library/router')

// Controllers
const VisitCtrl = require('~/controllers/api/visit.js')

// CRUD products
router.apiResource('visits', VisitCtrl)

// Nested resource CRUD
router.apiResource('users.visits', VisitCtrl)

module.exports = router