'use strict'

const express = require('express')
var router = express.Router()

// Emulate Laravel resource method
router.resource = function(resource,controller) {
    let uriLC  = `/${resource}`
    let uriRUD = `/${resource}/:id`
    const ErrorCtrl = require('../controllers/error')
    router.get(uriLC, controller.index || ErrorCtrl.page404)
    router.get(uriLC, controller.create || ErrorCtrl.page404)
    router.post(uriLC, controller.store || ErrorCtrl.page404)
    router.get(uriRUD, controller.show || ErrorCtrl.page404)
    router.get(uriRUD, controller.edit || ErrorCtrl.page404)
    router.put(uriRUD, controller.update || ErrorCtrl.page404)
    router.delete(uriRUD, controller.destroy || ErrorCtrl.page404)    
}

// Homepage
const HomeCtrl = require('../controllers/home')
router.get('/', HomeCtrl.index);

// Resource example
router.resource('incomplete', HomeCtrl)

// Errors
const ErrorCtrl = require('../controllers/error')
router.get('/404', ErrorCtrl.page404);

module.exports = router;