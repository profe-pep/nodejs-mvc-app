'use strict'

const express = require('express')
var router = express.Router()

// Controllers
const ErrorCtrl = require('~/controllers/error')
const VisitCtrl = require('~/controllers/api/visit.js')

// Emulate Laravel apiResource method
router.apiResource = function(resource,controller) {
    let uriLC  = `/${resource}`
    let uriRUD = `/${resource}/:id`
    router.get(uriLC, controller.index || ErrorCtrl.error404)
    router.post(uriLC, controller.store || ErrorCtrl.error404)
    router.get(uriRUD, controller.show || ErrorCtrl.error404)
    router.put(uriRUD, controller.update || ErrorCtrl.error404)
    router.delete(uriRUD, controller.destroy || ErrorCtrl.error404)    
}

// CRUD products
router.apiResource('visits', VisitCtrl)

module.exports = router