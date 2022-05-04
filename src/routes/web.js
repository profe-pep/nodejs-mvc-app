'use strict'

var router = require('~/library/router')

// Controllers
const ErrorCtrl = require('~/controllers/error')
const HomeCtrl = require('~/controllers/web/home')

// Homepage
router.get('/', HomeCtrl.index);

// Resource example
router.resource('incompletes', HomeCtrl)

// Errors
router.get('/404', ErrorCtrl.error404);

module.exports = router;