'use strict'

const express = require('express')
var router = express.Router()

// Emulate Laravel resource method
router.resource = function(resource,controller) {
    let uriLC  = `/${resource}`
    let uriRUD = `/${resource}/:id`
    router.get(uriLC, controller.index)
    router.get(uriLC, controller.create)
    router.post(uriLC, controller.store)
    router.get(uriRUD, controller.show)
    router.get(uriRUD, controller.edit)
    router.put(uriRUD, controller.update)
    router.delete(uriRUD, controller.destroy)    
}

// Homepage
const HomeCtrl = require('../controllers/home')
router.get('/', HomeCtrl.index);

module.exports = router;