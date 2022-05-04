'use strict'

const express = require('express')
var router = express.Router()

// Emulate Laravel resources
// https://laravel.com/docs/9.x/controllers#actions-handled-by-resource-controller
function _generateCRUD(resource, controller, web=true) {
    // Resource name (plural)
    let r = resource.split(".")
    let uriLC  = `/${r[0]}`
    let uriRUD = `/${r[0]}/:${r[0].slice(0,-1)}`

    // Nested resources
    if (r.length > 1) {
        uriLC  = uriRUD + `/${r[1]}`
        uriRUD += `/${r[1]}/:${r[1].slice(0,-1)}`
    }

    // Controller methods
    if (controller.index) {
        router.get(uriLC, controller.index)
    }
    if (controller.create && web) {
        router.get(uriLC + '/create', controller.create)
    }
    if (controller.store) {
        router.post(uriLC, controller.store)
    }
    if (controller.show) {
        router.get(uriRUD, controller.show)
    }
    if (controller.edit && web) {
        router.get(uriRUD + '/edit', controller.edit)
    }
    if (controller.update) {
        router.put(uriRUD, controller.update)
    }    
    if (controller.destroy) {
        router.delete(uriRUD, controller.destroy)
    }
}

// Emulate Laravel resource method
router.resource = function(resource, controller) {    
    _generateCRUD(resource, controller, true)
}

// Emulate Laravel apiResource method
router.apiResource = function(resource, controller) {
    _generateCRUD(resource, controller, false)
}

module.exports = router;